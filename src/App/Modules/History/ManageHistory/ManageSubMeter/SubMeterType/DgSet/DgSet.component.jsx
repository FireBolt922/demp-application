import React, { useState, useEffect } from 'react';
import { Row, Col, Space, Form, Select } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import PropTypes from 'prop-types';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import { useHistory, useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MultiBarGraph from 'App/Common/UIComponents/MultiBarGraph';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import {
  ColPadding,
  FormButton,
  TextCenter,
  DividerPadding,
  CustomFormItem,
  CustomSelect,
} from './DgSet.styled';
import SectionHeader from './components/SectionHeader';
import { dummyDGSubMeterHistory } from './DgSet.utilities';

function DgSet({ meterId, meterType, startDate, endDate, meterList }) {
  const { orgName, plantID } = useParams();
  const [readingStartDate, setReadingStartDate] = useState();
  const [applicationType, setApplicationType] = useState(meterType);
  const [form] = Form.useForm();
  const allSubMeterHistory = dummyDGSubMeterHistory;

  const history = useHistory();

  function onChangeHandle(data) {
    meterList.forEach((item) => {
      if (parseInt(data.split('+')[0], 10) === item.id) {
        setReadingStartDate(item.readingStartDate);
      }
    });

    setApplicationType(parseInt(data.split('+')[1], 10));
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
  }, [
    meterId,
    meterType,
    form,
    setReadingStartDate,
    meterList,
    startDate,
    endDate,
  ]);

  const onFinish = (values) => {
    const subMeterId = parseInt(values.formMeterId.split('+')[0], 10);
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
      search: stringifyUrlParam({
        meterType: applicationType,
        meterId: Number(subMeterId),
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
  };
  return (
    <ApiSuspense>
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
                    onChange={onChangeHandle}
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
                  <ParamBox label={item.name} value={item.value} />
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
                <MultiBarGraph
                  data={allSubMeterHistory.graphData}
                  firstBarName="kWh"
                  secondBarName="Liters"
                />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
    </ApiSuspense>
  );
}
DgSet.protoTypes = {
  meterId: PropTypes.string.isRequired,
  meterType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.string.isRequired,
};
export default DgSet;
