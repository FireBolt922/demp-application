import React, { useState, useEffect } from 'react';
import { Row, Col, Space, Form, Select, Typography } from 'antd';
import PropTypes from 'prop-types';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import { useHistory, useParams } from 'react-router-dom';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { stringifyUrlParam } from 'utilities/url';
import BarLineGraph from 'App/Common/UIComponents/BarLineGraph';
import { PAGE } from 'App/Constants/app.constants';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import moment from 'moment';
import { AirCompressorSubMeterHistoryTransformer } from './AirCompressor.utilities';
import { getAirCompressorSubMeterHistoryInfo } from './AirCompressor.service';
import {
  CustomTitle,
  DividerPadding,
  ColPadding,
  FormButton,
  CustomFormItem,
  TextCenter,
} from './AirCompressor.styled';

const { Text } = Typography;
function AirCompressorSubMeter({
  meterId,
  meterType,
  startDate,
  endDate,
  meterList,
}) {
  const { orgName, plantID } = useParams();
  const [readingStartDate, setReadingStartDate] = useState();
  const [form] = Form.useForm();
  const {
    response: allSubMeterHistory,
    network: metaSubMeterHistory,
    call: updateHistoryCall,
  } = network.useNetwork(getAirCompressorSubMeterHistoryInfo, {
    auto: true,
    autoCallArgs: [plantID, meterId, startDate, endDate],
    transformer: AirCompressorSubMeterHistoryTransformer,
  });

  const history = useHistory();
  function onChangeHandle(data) {
    meterList.forEach((item) => {
      if (parseInt(data.split('+')[0], 10) === item.id) {
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
    const subMeterId = parseInt(values.formMeterId.split('+')[0], 10);
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
      search: stringifyUrlParam({
        meterType: parseInt(values.formMeterId.split('+')[1], 10),
        meterId: subMeterId,
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
    if (parseInt(values.formMeterId.split('+')[1], 10) === 1) {
      updateHistoryCall(
        plantID,
        subMeterId,
        moment(values.dates[0]).format('YYYY-MM-DD'),
        moment(values.dates[1]).format('YYYY-MM-DD'),
      );
    }
  };
  return (
    <ApiSuspense meta={metaSubMeterHistory}>
      <ColPadding span={24}>
        <Wrapper align="center" height="52px">
          <Form form={form} onFinish={onFinish}>
            <Space>
              <CustomFormItem
                name="formMeterId"
                rules={[{ required: true, message: 'Please select Meter!' }]}
              >
                <Select
                  placeholder="Please Select Meter"
                  onChange={onChangeHandle}
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
                </Select>
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
                >
                  SUBMIT
                </FormButton>
              </Form.Item>
            </Space>
          </Form>
        </Wrapper>
      </ColPadding>

      {allSubMeterHistory.energyParameters ? (
        <Row>
          {allSubMeterHistory.energyParameters.map((item) => {
            return (
              <Col span={6} key={item.key}>
                <ParamBox label={item.params} value={item.value} />
              </Col>
            );
          })}
        </Row>
      ) : null}
      {allSubMeterHistory.motorHistoryAnalysis ? (
        <Row>
          <ColPadding span={24}>
            <Wrapper>
              <Row>
                <Col span={24}>
                  <CustomTitle level={5}>Motor History Analysis</CustomTitle>
                </Col>
                <DividerPadding />
                {allSubMeterHistory.motorHistoryAnalysis.map((item) => {
                  return (
                    <Col
                      span={
                        allSubMeterHistory.motorHistoryAnalysis.length === 2
                          ? 12
                          : 6
                      }
                      key={item.key}
                    >
                      <ParamBox label={item.name} value={item.value} />
                    </Col>
                  );
                })}
                <br />
                {allSubMeterHistory.isOptimumLoad.state ? (
                  <TextCenter span={24}>
                    <Text type="success">
                      *Note: {allSubMeterHistory.isOptimumLoad.message}
                    </Text>
                  </TextCenter>
                ) : null}
              </Row>
            </Wrapper>
          </ColPadding>
        </Row>
      ) : null}

      <Row>
        <ColPadding span={24}>
          <Wrapper>
            <TextCenter span={24}>
              <CustomTitle level={5}>Graph</CustomTitle>
              <DividerPadding />
            </TextCenter>
            <Col span={24}>
              {allSubMeterHistory.graphTitle ? (
                <BarLineGraph
                  data={allSubMeterHistory.graphData}
                  barName={allSubMeterHistory.graphTitle.barName}
                  lineName={allSubMeterHistory.graphTitle.lineName}
                />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
    </ApiSuspense>
  );
}
AirCompressorSubMeter.protoTypes = {
  meterId: PropTypes.number.isRequired,
  meterType: PropTypes.number.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  meterList: PropTypes.object.isRequired,
};

export default AirCompressorSubMeter;
