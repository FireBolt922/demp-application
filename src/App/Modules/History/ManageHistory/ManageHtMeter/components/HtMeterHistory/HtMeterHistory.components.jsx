import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Space, Form, Select } from 'antd';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import PropTypes from 'prop-types';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import BarLineGraph from 'App/Common/UIComponents/BarLineGraph';
import { stringifyUrlParam } from 'utilities/url';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import SectionHeader from './components/SectionHeader';
import ParameterBox from './components/ParameterBox';
import {
  ColPadding,
  FormButton,
  CustomTitle,
  TextCenter,
} from './HtMeterHistory.styled';
import KeyPerformanceSection from './components/KeyPerformanceSection';
import { dummyHtMeterHistory } from './HtMeterHistory.utilities';

function History({ meterId, startDate, endDate, meterList }) {
  const { orgName, plantID } = useParams();
  const [form] = Form.useForm();
  const history = useHistory();
  const [readingStartDate, setReadingStartDate] = useState(null);

  // History Call
  const allHtMeterHistory = dummyHtMeterHistory;

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
      meterFormId: Number(meterId),
      dates: [startDate, endDate],
    });
  }, [meterId, form, setReadingStartDate, meterList, startDate, endDate]);
  const onFinish = (values) => {
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/ht-meter`,
      search: stringifyUrlParam({
        meterId: values.meterFormId,
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
                <Form.Item
                  name="meterFormId"
                  rules={[{ required: true, message: 'Please select Meter!' }]}
                >
                  <Select
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
        {allHtMeterHistory.energyParameters
          ? allHtMeterHistory.energyParameters.map((item) => {
              return (
                <Col span={8} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })
          : null}
      </Row>
      <Row>
        {allHtMeterHistory.extendedEnergyParameters
          ? allHtMeterHistory.extendedEnergyParameters.map((item) => {
              return (
                <ColPadding span={12} key={item.key}>
                  <Wrapper>
                    <ParameterBox label={item.params} value={item.value} />
                  </Wrapper>
                </ColPadding>
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
              {allHtMeterHistory.graphData ? (
                <BarLineGraph
                  data={allHtMeterHistory.graphData}
                  barName={allHtMeterHistory.graphLabel.barName}
                  lineName={allHtMeterHistory.graphLabel.lineName}
                />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
      {allHtMeterHistory.isProducing === true ? (
        <div>
          <Row>
            <ColPadding span={24}>
              <Wrapper>
                <strong>Note:</strong>
                {allHtMeterHistory.note}
              </Wrapper>
            </ColPadding>
          </Row>
          <Row>
            <Col span={24}>
              <KeyPerformanceSection data={allHtMeterHistory} />
            </Col>
          </Row>
        </div>
      ) : null}
      <Row>
        <ColPadding span={24}>
          <Wrapper>
            <Row>
              <ColPadding span={24}>
                <SectionHeader name="Analysis of PF and Reactive Energy" />
              </ColPadding>
              <ColPadding span={12}>
                {allHtMeterHistory.analysis ? (
                  <CustomTable
                    tableData={allHtMeterHistory.analysis}
                    title="Analysis"
                  />
                ) : null}
              </ColPadding>
              <ColPadding span={12}>
                {allHtMeterHistory.extendedAnalysis ? (
                  <CustomTable
                    tableData={allHtMeterHistory.extendedAnalysis}
                    title="Analysis"
                  />
                ) : null}
              </ColPadding>
            </Row>
          </Wrapper>
        </ColPadding>
      </Row>
      <ColPadding>
        <Wrapper>
          <Row>
            <Col span={24}>
              <CustomTitle level={5}>Power Quality</CustomTitle>
              <DividerPadding />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                {allHtMeterHistory.powerQuality
                  ? allHtMeterHistory.powerQuality.map((item) => {
                      return (
                        <Col span={8} key={item.key}>
                          <ParamBox label={item.params} value={item.value} />
                        </Col>
                      );
                    })
                  : null}
              </Row>
            </Col>
          </Row>
        </Wrapper>
      </ColPadding>
    </ApiSuspense>
  );
}
History.protoTypes = {
  meterId: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.string.isRequired,
};

export default History;
