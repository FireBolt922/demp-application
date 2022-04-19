import React from 'react';
import { PAGE } from 'App/Constants/app.constants';
import moment from 'moment';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { Row, Space, Form, Typography } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import PropTypes from 'prop-types';
import { stringifyUrlParam } from 'utilities/url';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import GraphData from './components/GraphData';
import {
  dummyAirCompressorMeterData,
  dummyAirCompressorMeterData2,
} from './AirCompressorSubMeter.utilities';
import {
  ColDivider,
  CustomTitle,
  CustomButton,
} from './AirCompressorSubMeter.styled';

const { Title } = Typography;

function AirCompressorSubMeter({ meterId }) {
  const conditionalData =
    meterId === '4'
      ? dummyAirCompressorMeterData
      : dummyAirCompressorMeterData2;
  const history = useHistory();
  const { orgName, plantID } = useParams();
  function onSubmit(values) {
    if (
      values.dates[0] &&
      values.dates[1] &&
      meterId &&
      dummyAirCompressorMeterData.applicationType
    ) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
        search: stringifyUrlParam({
          meterType: dummyAirCompressorMeterData.applicationType,
          meterId,
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
          key: 'subMeter',
        }),
      });
    }
  }
  return (
    <ApiSuspense>
      {conditionalData.monthlyAndTodaysDataSummary ? (
        <div>
          <ColDivider span={24}>
            <Wrapper>
              <CustomTitle level={5}>{conditionalData.meterName}</CustomTitle>
            </Wrapper>
          </ColDivider>

          <MeterBlock parameter={conditionalData.monthlyAndTodaysDataSummary} />
          <MeterBlock parameter={conditionalData.liveDataSummary} />

          <ColDivider span={24}>
            <Wrapper height="502px">
              <GraphData meterId={meterId} />
            </Wrapper>
          </ColDivider>

          <ColDivider span={24}>
            <Wrapper>
              <Title level={5}>Yesterdays Motor Performance Analysis</Title>
              <DividerPadding />
              {conditionalData.isAirCompressorWorkingOnOptimumLoad === false ? (
                <Row>
                  <ColDivider span={12}>
                    <CustomTable
                      tableData={
                        conditionalData.yesterdayMotorAnalysisFirstParamTable
                      }
                    />
                  </ColDivider>
                  <ColDivider span={12}>
                    <CustomTable
                      tableData={
                        conditionalData.yesterdayMotorAnalysisSecondParamTable
                      }
                    />
                  </ColDivider>
                </Row>
              ) : (
                <>
                  <MeterBlock parameter={conditionalData.runningOptimum} />
                  <Row justify="center">
                    <Title type="success" level={5}>
                      Note:
                      {conditionalData.airCompressorWorkingOnOptimumLoadMessage}
                    </Title>
                  </Row>
                </>
              )}
            </Wrapper>
          </ColDivider>

          <Row>
            <ColDivider span={12}>
              <Wrapper>
                <Title level={5}>Yesterdays Data</Title>

                <DividerPadding />

                <CustomTable
                  tableData={conditionalData.yesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColDivider>

            <ColDivider span={12}>
              <Wrapper height="421px">
                <Title level={5}> History</Title>
                <DividerPadding />
                <Form onFinish={onSubmit}>
                  <ColDivider>
                    <Space>
                      <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                        <DateSelector
                          readingStartDate={
                            conditionalData.meterReadingStartDate
                          }
                        />
                      </Form.Item>
                      <Form.Item>
                        <CustomButton
                          shape="round"
                          htmlType="submit"
                          type="primary"
                          name="Submit"
                        >
                          Submit
                        </CustomButton>
                      </Form.Item>
                    </Space>
                  </ColDivider>
                </Form>
              </Wrapper>
            </ColDivider>
          </Row>
        </div>
      ) : null}
    </ApiSuspense>
  );
}
AirCompressorSubMeter.protoTypes = {
  meterId: PropTypes.number.isRequired,
};

export default AirCompressorSubMeter;
