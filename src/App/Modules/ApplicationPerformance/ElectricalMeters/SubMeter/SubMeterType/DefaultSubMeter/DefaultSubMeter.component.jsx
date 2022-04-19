import React from 'react';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { Row, Space, Form } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import { stringifyUrlParam } from 'utilities/url';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import SectionHeader from './components/SectionHeader';
import GraphData from './components/GraphData';
import { dummySubMeterData } from './DefaultSubMeter.utilities';
import {
  ColDivider,
  CustomTitle,
  CustomButton,
} from './DefaultSubMeter.styled';

function DefaultSubMeter({ meterId }) {
  const history = useHistory();
  const { orgName, plantID } = useParams();

  function onSubmit(values) {
    if (
      values.dates[0] &&
      values.dates[1] &&
      meterId &&
      dummySubMeterData.application_type
    ) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
        search: stringifyUrlParam({
          meterType: dummySubMeterData.application_type,
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
      {dummySubMeterData.monthlyAndTodaysDataSummary ? (
        <div>
          <Row>
            <ColDivider span={24}>
              <Wrapper>
                <CustomTitle level={5}>
                  {dummySubMeterData.meter_name}
                </CustomTitle>
              </Wrapper>
            </ColDivider>
          </Row>
          {/* Monthly and Todays Data Section */}
          <MeterBlock
            parameter={dummySubMeterData.monthlyAndTodaysDataSummary}
          />
          {/* Live Data Section */}
          <MeterBlock parameter={dummySubMeterData.liveDataSummary} />
          <Row>
            <ColDivider span={24}>
              <Wrapper height="502px">
                <GraphData meterId={meterId} />
              </Wrapper>
            </ColDivider>
          </Row>
          <Row>
            <ColDivider span={12}>
              <Wrapper>
                <Row>
                  <SectionHeader name="Yesterday's Data" />
                  <DividerPadding />
                </Row>
                <CustomTable
                  tableData={dummySubMeterData.yesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColDivider>
            <ColDivider span={12}>
              <Wrapper height="407px">
                <SectionHeader name="History" />
                <DividerPadding />
                <Row>
                  <Form onFinish={onSubmit}>
                    <ColDivider span={24}>
                      <Space>
                        <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                          <DateSelector
                            readingStartDate={
                              dummySubMeterData.meterReadingStartDate
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
                </Row>
              </Wrapper>
            </ColDivider>
          </Row>
        </div>
      ) : null}
    </ApiSuspense>
  );
}

export default DefaultSubMeter;
