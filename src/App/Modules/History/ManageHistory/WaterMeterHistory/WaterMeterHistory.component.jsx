import React from 'react';
import { Col, Row, Form, Space, Select } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import PropTypes from 'prop-types';
import ParamBox from 'App/Common/UIComponents/ParamBox/ParamBox.component';
import moment from 'moment';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import BarGraph from 'App/Common/UIComponents/BarGraph';
import {
  dummyConnectedMeterList,
  graphResponse,
  dummyConnectedMeterList as connectedMeterList,
} from './WaterMeterHistory.utilities';

import HistoryMeterUI from '../HistoryMeterUI/HistoryMeterUI.component';
import { ColPadding, FormButton } from './WaterMeterHistory.styled';

function WaterMeterHistory({ waterMeterData }) {
  const [form] = Form.useForm();
  const startDate = moment(waterMeterData.startDate);
  const endDate = moment(waterMeterData.endDate);
  const readingStartDate = moment(new Date()).subtract(10, 'days');
  function onFinish() {
    return null;
  }
  function handleDropdownChange() {
    return null;
  }
  const meterList = dummyConnectedMeterList.waterMeterList;
  return (
    <div>
      {waterMeterData.meterId !== undefined ? (
        <>
          <Row>
            <ColPadding span={24}>
              <Wrapper align="center" height="52px">
                <Form form={form} onFinish={onFinish}>
                  <Space>
                    <Form.Item
                      name="meterFormId"
                      rules={[
                        { required: true, message: 'Please select Meter!' },
                      ]}
                    >
                      <Select
                        placeholder="Please Select Meter"
                        onChange={handleDropdownChange}
                        defaultValue="Water Meter 1"
                      >
                        {meterList
                          ? meterList.map((item) => (
                              <Select.Option key={item.id} value={item.id}>
                                {item.name}
                              </Select.Option>
                            ))
                          : null}
                      </Select>
                    </Form.Item>
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
                      >
                        SUBMIT
                      </FormButton>
                    </Form.Item>
                  </Space>
                </Form>
              </Wrapper>
            </ColPadding>
          </Row>
          <ColPadding>
            <Wrapper>
              <Row>
                <Col span={6}>
                  <ParamBox label="Water Consumption" value="123 M&sup3;" />
                </Col>
                <Col span={6}>
                  <ParamBox label="Water Cost" value="₹ 1230" />
                </Col>
                <Col span={6}>
                  <ParamBox label="Average Velocity" value="12 m/sec" />
                </Col>
                <Col span={6}>
                  <ParamBox label="Average Temperature" value="30 &#8451;" />
                </Col>
              </Row>
            </Wrapper>
          </ColPadding>
          <ColPadding>
            <Wrapper>
              <BarGraph
                data={graphResponse}
                barName="Water Consumption"
                lineName="Time "
              />
            </Wrapper>
          </ColPadding>
          <Row>
            <ColPadding span={6}>
              <Wrapper>
                <ParamBox label="Run Hours" value="15 Hrs" />
              </Wrapper>
            </ColPadding>
            <ColPadding span={6}>
              <Wrapper>
                <ParamBox label="Off Hours" value="9 Hrs" />
              </Wrapper>
            </ColPadding>
            <ColPadding span={6}>
              <Wrapper>
                <ParamBox label="Per Hour Consumption" value="12 M&sup3;/Hr" />
              </Wrapper>
            </ColPadding>
            <ColPadding span={6}>
              <Wrapper>
                <ParamBox label="Average Temperature" value="30 &deg;C" />
              </Wrapper>
            </ColPadding>
          </Row>
          <Row>
            <ColPadding span={8}>
              <Wrapper>
                <ParamBox label="Average Velocity" value="30 &deg;C" />
              </Wrapper>
            </ColPadding>
            <ColPadding span={8}>
              <Wrapper>
                <ParamBox label="Day Consumption" value="10 M&sup3;" />
              </Wrapper>
            </ColPadding>
            <ColPadding span={8}>
              <Wrapper>
                <ParamBox label="Average Density" value="12 M/&sup3;" />
              </Wrapper>
            </ColPadding>
          </Row>
        </>
      ) : (
        <HistoryMeterUI
          meterList={connectedMeterList.waterMeterList}
          meterType="waterMeter"
        />
      )}
    </div>
  );
}

WaterMeterHistory.propTypes = {
  waterMeterData: PropTypes.object.isRequired,
};

export default WaterMeterHistory;
