import React, { useState, useEffect } from 'react';
import { Row, Col, Space, Form, Select } from 'antd';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import PropTypes from 'prop-types';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import { useHistory, useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import BarGraph from 'App/Common/UIComponents/BarGraph';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import {
  ColPadding,
  FormButton,
  TextCenter,
  DividerPadding,
  CustomSelect,
  CustomFormItem,
} from './Solar.styled';
import { getSolarSubMeterHistoryInfo } from './Solar.service';
import { SolarSubMeterHistoryTransformer } from './Solar.utilities';
import SectionHeader from './components/SectionHeader';

function Solar({ meterId, meterType, startDate, endDate, meterList }) {
  const { orgName, plantID } = useParams();
  const [readingStartDate, setReadingStartDate] = useState();
  const [form] = Form.useForm();
  const {
    response: allSubMeterHistory,
    network: metaSubMeterHistory,
    call: updateHistoryCall,
  } = network.useNetwork(getSolarSubMeterHistoryInfo, {
    auto: true,
    autoCallArgs: [plantID, meterId, startDate, endDate],
    transformer: SolarSubMeterHistoryTransformer,
  });
  const history = useHistory();
  function handleDropdownChange(value) {
    meterList.forEach((item) => {
      if (value === item.id) {
        setReadingStartDate(item.readingStartDate);
      }
    });
  }

  useEffect(() => {
    if (meterList) {
      meterList.forEach((item) => {
        if (Number(meterId) === item.id) {
          setReadingStartDate(item.readingStartDate);
        }
      });
    }
    form.setFieldsValue({
      formMeterId: `${Number(meterId)}+${Number(meterType)}`,
      dates: [startDate, endDate],
    });
  }, [meterId, meterType, form, meterList, endDate, startDate]);
  const onFinish = (values) => {
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
      search: stringifyUrlParam({
        meterType: parseInt(values.formMeterId.split('+')[1], 10),
        meterId: parseInt(values.formMeterId.split('+')[0], 10),
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
    if (parseInt(values.formMeterId.split('+')[1], 10) === 3) {
      updateHistoryCall(
        plantID,
        parseInt(values.formMeterId.split('+')[0], 10),
        moment(values.dates[0]).format('YYYY-MM-DD'),
        moment(values.dates[1]).format('YYYY-MM-DD'),
      );
    }
  };
  return (
    <ApiSuspense meta={metaSubMeterHistory}>
      <Row>
        <ColPadding span={24}>
          <Wrapper align="center" height="52px">
            <Form form={form} onFinish={onFinish}>
              <Space>
                <CustomFormItem
                  name="formMeterId"
                  rules={[{ required: true, message: 'Please select Meter!' }]}
                >
                  <CustomSelect
                    placeholder="Please Select Meter"
                    onChange={handleDropdownChange}
                    id="select"
                  >
                    {meterList
                      ? meterList.map((item) => (
                          <Select.Option
                            key={item.id}
                            value={`${item.id}+${item.applicationType}`}
                          >
                            {item.name}
                          </Select.Option>
                        ))
                      : null}
                  </CustomSelect>
                </CustomFormItem>
                <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                  <DateSelector
                    historyStartDate={moment(startDate)}
                    historyEndDate={moment(endDate)}
                    readingStartDate={readingStartDate}
                  />
                </Form.Item>
                <Form.Item>
                  <FormButton
                    shape="round"
                    type="primary"
                    htmlType="submit"
                    name="Submit"
                    id="submit"
                  >
                    SUBMIT
                  </FormButton>
                </Form.Item>
              </Space>
            </Form>
          </Wrapper>
        </ColPadding>
      </Row>
      <Row>
        {allSubMeterHistory.energyParameters
          ? allSubMeterHistory.energyParameters.map((item) => {
              return (
                <Col span={6} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })
          : null}
      </Row>
      <Row>
        <ColPadding span={24}>
          <Wrapper>
            <TextCenter span={24}>
              <SectionHeader name="Graph" />
              <DividerPadding />
            </TextCenter>
            <Col span={24}>
              {allSubMeterHistory.graphData ? (
                <BarGraph data={allSubMeterHistory.graphData} barName="kWh" />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
    </ApiSuspense>
  );
}
Solar.protoTypes = {
  meterId: PropTypes.string.isRequired,
  meterType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.string.isRequired,
};
export default Solar;
