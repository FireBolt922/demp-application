import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { Row, Col, Space, Form, Select } from 'antd';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import PropTypes from 'prop-types';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import { stringifyUrlParam } from 'utilities/url';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import BarGraph from 'App/Common/UIComponents/BarGraph';
import { getGasMeterHistoryService } from './GasMeterHistory.service';
import { gasMeterHistoryTransformer } from './GasMeterHistory.utilities';

import {
  ColPadding,
  FormButton,
  DividerPadding,
  TextCenter,
  CustomSelect,
} from './GasMeterHistory.styled';
import SectionHeader from './components/SectionHeader';

function GasMeterHistory({ meterId, startDate, endDate, meterList }) {
  const { orgName, plantID } = useParams();
  const [readingStartDate, setReadingStartDate] = useState();
  const [form] = Form.useForm();
  const history = useHistory();

  // History Call
  const {
    response: gasMeterHistoryData,
    network: metaGasMeterHistory,
    call: updateHistoryCall,
  } = network.useNetwork(getGasMeterHistoryService, {
    auto: true,
    autoCallArgs: [plantID, meterId, startDate, endDate],
    transformer: gasMeterHistoryTransformer,
  });

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
      selectedMeterId: Number(meterId),
      dates: [moment(startDate), moment(endDate)],
    });
  }, [meterId, startDate, endDate, form, meterList, setReadingStartDate]);
  const onFinish = (values) => {
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/gas-meter`,
      search: stringifyUrlParam({
        meterId: values.selectedMeterId,
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
    // Call
    updateHistoryCall(
      plantID,
      values.selectedMeterId,
      moment(values.dates[0]).format('YYYY-MM-DD'),
      moment(values.dates[1]).format('YYYY-MM-DD'),
    );
  };
  return (
    <ApiSuspense meta={metaGasMeterHistory}>
      <Row>
        <ColPadding span={24}>
          <Wrapper align="center" height="52px">
            <Form form={form} onFinish={onFinish}>
              <Space>
                <Form.Item
                  name="selectedMeterId"
                  rules={[{ required: true, message: 'Please select Meter!' }]}
                >
                  <CustomSelect
                    placeholder="Please Select Meter"
                    onChange={handleDropdownChange}
                  >
                    {meterList
                      ? meterList.map((item) => (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        ))
                      : null}
                  </CustomSelect>
                </Form.Item>
                <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                  <DateSelector
                    historyStartDate={moment(startDate)}
                    historyEndDate={moment(endDate)}
                    readingStartDate={readingStartDate}
                  />
                </Form.Item>
                <Form.Item>
                  <FormButton shape="round" type="primary" htmlType="submit">
                    SUBMIT
                  </FormButton>
                </Form.Item>
              </Space>
            </Form>
          </Wrapper>
        </ColPadding>
      </Row>
      <Row>
        {gasMeterHistoryData.aggregateData
          ? gasMeterHistoryData.aggregateData.map((item) => {
              return (
                <Col span={8} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })
          : null}
      </Row>
      {/* KPI Section */}
      {gasMeterHistoryData.isProducing ? (
        <MeterBlock parameter={gasMeterHistoryData.kpi} />
      ) : null}
      <Row>
        <ColPadding span={24}>
          <Wrapper>
            <TextCenter span={24}>
              <SectionHeader name="Graph" />
              <DividerPadding />
            </TextCenter>
            <Col span={24}>
              {gasMeterHistoryData.graphData ? (
                <BarGraph
                  data={gasMeterHistoryData.graphData}
                  barName={`Gas Consumption (${gasMeterHistoryData.meterUnit})`}
                />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
      {gasMeterHistoryData.isProducing === true ? (
        <Row>
          <ColPadding span={24}>
            <Wrapper>
              <strong>Note:</strong>
              {gasMeterHistoryData.note}
            </Wrapper>
          </ColPadding>
        </Row>
      ) : null}
    </ApiSuspense>
  );
}
GasMeterHistory.protoTypes = {
  meterId: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.string.isRequired,
};

export default GasMeterHistory;
