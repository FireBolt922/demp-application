import moment from 'moment';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import customLocalStorage from 'utilities/storage';
import {
  Select,
  Row,
  Button,
  DatePicker,
  Form,
  Col,
  Typography,
  notification,
  Divider,
} from 'antd';
import * as network from 'react-hooks/network/network';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import { getReportDetails } from './Request.services';
import {
  dummyShiftData,
  dummyMeterList,
  dummyGasMeterList,
} from './Request.utilities';
import {
  CustomTooltip,
  CustomSelectForReport,
  CustomCol,
} from './Request.styled';

function Request() {
  const history = useHistory();
  const { Title } = Typography;
  const { Option } = Select;
  const { orgName, plantID } = useParams();
  const [reportName, setReportName] = useState();
  const meterList = dummyMeterList;
  // meterType means HT or sub meter
  const [meterType, setMeterType] = useState(null);
  const [applicationCategory, setApplicationCategory] = useState(null);
  const [selectMonthCalendar, setSelectMonthCalendar] = useState(false);
  const [
    firstMeterReadingTimestamp,
    setFirstMeterReadingTimestamp,
  ] = useState();
  // Call for getting shift details
  const shiftData = dummyShiftData;
  // Call for getting report
  const { call: getDetailsCall } = network.useNetwork(getReportDetails, {
    auto: false,
  });

  const gasMeterList = dummyGasMeterList;
  /**
   *
   * @param {string} meterType
   */
  function onChangeHandleMeterName(meterTypeSelected) {
    setMeterType(meterTypeSelected);
  }
  // Get Feature List
  const plantFeatures = customLocalStorage.getItem('plantFeatures', [], 'json');
  let meterCategory;
  let plantStartDate;
  plantFeatures.map((items) => {
    if (Number(plantID) === Number(items.plantId)) {
      meterCategory = items.meterCategory;
      plantStartDate = items.plantStartDate;
      return true;
    }
    return false;
  });
  /**
   * This is the function which will send data to backend for report
   * @param {object} values
   *  return object and backend generate report call
   */
  const generateReport = async (values) => {
    let params;
    // these are request type used for sending report type to backend
    let requestType;
    let selectedMeterId;
    // here we are getting id of meter. split is used because we are also sending timestamp
    switch (values.reportTypeSelected) {
      case 'measured_data':
        selectedMeterId = values.selectedSubMeter.split('+');
        params = {
          plant_id: plantID,
          shift_name: values.shiftSelected,
          meter_id: selectedMeterId[0],
          meter_type: values.selectedMeter,
          day_date: moment(values.dateSelected).format('YYYY-MM-DD'),
          meter_category: applicationCategory,
        };
        requestType = 'measured_data';
        break;
      case 'plant_data':
        requestType = 'plant_data';
        params = {
          plant_id: plantID,
          shift_name: values.shiftSelected,
          period: values.duration,
          month_date: moment(values.monthSelection)
            .startOf('month')
            .format('YYYY-MM-DD'),
          meter_category: applicationCategory,
        };
        break;
      case 'plant_summary':
        requestType = 'plant_summary';
        params = {
          plant_id: plantID,
          shift_name: values.shiftSelected,
          period: values.duration,
          month_date: moment(values.monthSelection)
            .startOf('month')
            .format('YYYY-MM-DD'),
          meter_category: applicationCategory,
        };
        break;
      default:
        selectedMeterId = values.selectedSubMeter.split('+');
        requestType = 'application_data';
        params = {
          plant_id: plantID,
          shift_name: values.shiftSelected,
          period: values.duration,
          month_date: moment(values.monthSelection)
            .startOf('month')
            .format('YYYY-MM-DD'),
          meter_id: selectedMeterId[0],
          meter_type: values.selectedMeter,
          meter_category: applicationCategory,
        };
        break;
    }
    // this is the response which will be posted to backend
    const dataToSend = {
      req_type: requestType,
      params,
    };
    const [, status] = await getDetailsCall(dataToSend);
    if (status.state === API_NETWORK_STATUS.SUCCESS) {
      history.push({
        pathname: `/org/${orgName}/${plantID}/report/all`,
      });
    } else {
      notification.error({
        message: 'Something went wrong',
      });
    }
  };
  return (
    <>
      <Wrapper>
        <Col span={24}>
          <Row>
            <Title level={5}>
              Request Report
              <CustomTooltip title="Generate Report for Meter and Application Meters">
                <QuestionCircleOutlined />
              </CustomTooltip>
            </Title>
          </Row>
        </Col>
        <Divider />
        <Form onFinish={generateReport}>
          <Row>
            <Form.Item
              // Here we will add the different type of report like Electrical or Gas
              name="applicationCategory"
              rules={[{ required: true, message: 'Meter Category required!' }]}
            >
              <CustomSelectForReport
                placeholder="Meter Category"
                onSelect={(event) => {
                  setApplicationCategory(event);
                }}
                id="meter-category"
              >
                {' '}
                {/* If electrical meter is true then depending on it data will be displayed */}
                {meterCategory.electrical_meters.is_enabled ? (
                  <Option key="electrical_meters" value="electrical_meters">
                    {meterCategory.electrical_meters.name}
                  </Option>
                ) : null}
                {/* If gas meter is true then depending on it data will be displayed */}
                {meterCategory.gas_flow_meters.is_enabled ? (
                  <Option key="gas_flow_meters" value="gas_flow_meters">
                    {meterCategory.gas_flow_meters.name}
                  </Option>
                ) : null}
              </CustomSelectForReport>
            </Form.Item>
            <Form.Item
              // Different Report type will be selected here like Plant Data , Measured Data
              name="reportTypeSelected"
              rules={[{ required: true, message: 'Report type required' }]}
            >
              <CustomSelectForReport
                placeholder="Report Type"
                onChange={(event) => {
                  setReportName(event);
                }}
                id="report-type"
              >
                {/* {applicationCategory !== null &&
                  REPORT_TYPE[applicationCategory].map((reportType) => {
                    return (
                      <Option key={reportType.key} value={reportType.key}>
                        {reportType.name}
                      </Option>
                    );
                  })} */}
                <Option key="measured_data" value="measured_data">
                  Measured Data
                </Option>
                <Option key="plant_data" value="plant_data">
                  Plant Data
                </Option>
                <Option key="application_data" value="application_data">
                  Application Data
                </Option>
                <Option key="plant_summary" value="plant_summary">
                  Plant Summary
                </Option>
              </CustomSelectForReport>
            </Form.Item>
            <Form.Item
              // Shift Details will be selected over here
              name="shiftSelected"
              rules={[{ required: true, message: 'Shift required!' }]}
            >
              <CustomSelectForReport placeholder="Shift" id="shift">
                {shiftData.shiftDetails
                  ? shiftData.shiftDetails.map((item) => {
                      return (
                        <Option key={item.shiftName} value={item.shiftName}>
                          {item.shiftName}
                        </Option>
                      );
                    })
                  : null}
              </CustomSelectForReport>
            </Form.Item>
            {reportName !== 'measured_data' ? (
              // If report Type is other than measured data then this will run
              <Form.Item
                name="duration"
                rules={[{ required: true, message: 'Duration is required!' }]}
              >
                {/* duration is required for all report except measured data */}
                <CustomSelectForReport
                  placeholder="Duration"
                  onSelect={(event) => {
                    if (event === 'monthly') {
                      setSelectMonthCalendar(true);
                    } else setSelectMonthCalendar(false);
                  }}
                  id="duration"
                >
                  <Option value="monthly" key="monthly">
                    Monthly Data
                  </Option>
                  <Option value="yesterdays" key="yesterdays">
                    Yesterdays Data
                  </Option>
                  <Option value="last_seven_days" key="last_seven_days">
                    Last 7 Days
                  </Option>
                </CustomSelectForReport>
              </Form.Item>
            ) : null}
            {/* if duration is monthly then this will be displayed */}
            {selectMonthCalendar === true ? (
              <CustomCol>
                <Form.Item name="monthSelection" rules={SELECT_DATE_RULE}>
                  <DatePicker
                    picker="month"
                    disabledDate={(dates) =>
                      !dates ||
                      dates.isBefore(plantStartDate) ||
                      dates.isAfter(new Date())
                    }
                    allowClear
                  />
                </Form.Item>
              </CustomCol>
            ) : null}
            {reportName === 'measured_data' ||
            reportName === 'application_data' ? (
              // IF Report type is Measured Data of Application Data this will be displayed
              <>
                {applicationCategory === 'electrical_meters' ? (
                  <>
                    <Form.Item
                      name="selectedMeter"
                      rules={[{ required: true, message: 'Meter required!' }]}
                    >
                      <CustomSelectForReport
                        placeholder="Meters Type"
                        onChange={onChangeHandleMeterName}
                        id="meter-type"
                      >
                        {meterCategory.electrical_meters.meter_types
                          .ht_meter === true ? (
                          <Option value="ht_meter">HT Meter</Option>
                        ) : null}
                        {meterCategory.electrical_meters.meter_types
                          .sub_meter === true ? (
                          <Option value="sub_meter">Sub Meter</Option>
                        ) : null}
                      </CustomSelectForReport>
                    </Form.Item>

                    <Form.Item
                      name="selectedSubMeter"
                      rules={[{ required: true, message: 'Meter required!' }]}
                    >
                      {/* This will get the connected meter list when meter type is selected */}
                      <CustomSelectForReport
                        placeholder="Meter Name"
                        onSelect={(event) => {
                          setFirstMeterReadingTimestamp(
                            moment.unix(event.split('+')[1]),
                          );
                        }}
                        id="meter-name"
                      >
                        {meterList[meterType]
                          ? meterList[meterType].map((item) => {
                              return (
                                <Option
                                  key={item.id}
                                  value={`${item.id}+${item.meterFirstDate}`}
                                >
                                  {item.name}
                                </Option>
                              );
                            })
                          : null}
                      </CustomSelectForReport>
                    </Form.Item>
                  </>
                ) : (
                  <>
                    <Form.Item
                      name="selectedMeter"
                      rules={[
                        { required: true, message: 'Meter required required!' },
                      ]}
                    >
                      <CustomSelectForReport
                        placeholder="Meters Type"
                        onChange={onChangeHandleMeterName}
                      >
                        {meterCategory.gas_flow_meters.meter_types
                          .gas_flow_meter === true ? (
                          <Option value="gas_flow_meter">Gas Flow Meter</Option>
                        ) : null}
                        {meterCategory.gas_flow_meters.meter_types
                          .sub_gas_flow_meter === true ? (
                          <Option value="sub_gas_flow_meter">
                            Sub Gas Flow Meter
                          </Option>
                        ) : null}
                      </CustomSelectForReport>
                    </Form.Item>
                    <Form.Item
                      name="selectedSubMeter"
                      rules={[{ required: true, message: 'Meter required!' }]}
                    >
                      <CustomSelectForReport
                        placeholder="Meter Name"
                        onSelect={(event) => {
                          setFirstMeterReadingTimestamp(
                            moment.unix(event.split('+')[1]),
                          );
                        }}
                      >
                        {gasMeterList[meterType]
                          ? gasMeterList[meterType].map((item) => {
                              return (
                                <Option
                                  key={item.id}
                                  value={`${item.id}+${item.meterFirstDate}`}
                                >
                                  {item.name}
                                </Option>
                              );
                            })
                          : null}
                      </CustomSelectForReport>
                    </Form.Item>
                  </>
                )}

                {reportName === 'measured_data' ? (
                  // if report name is measured data then this will be displayed
                  <Form.Item name="dateSelected" rules={SELECT_DATE_RULE}>
                    <DatePicker
                      disabledDate={(dates) =>
                        !dates ||
                        dates.isBefore(firstMeterReadingTimestamp) ||
                        dates.isAfter(new Date())
                      }
                      allowClear
                    />
                  </Form.Item>
                ) : null}
              </>
            ) : null}
          </Row>
          <Form.Item>
            <Col offset={10}>
              <Button type="primary" htmlType="submit" id="generate-report">
                Generate Report
              </Button>
            </Col>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
}

export default Request;
