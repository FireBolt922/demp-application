import React from 'react';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { useHistory, useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import useRouter from 'react-hooks/router';
import { Row, Form, Space } from 'antd';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import GraphData from './components/GraphData';
import SectionHeader from './components/SectionHeader';
import {
  ColPadding,
  ColDivider,
  DividerPadding,
  CustomTitle,
  CustomButton,
} from './DefaultSubGasMeter.styled';
import { dummySubGasMeterData } from './DefaultSubGasMeter.utilities';

function DefaultSubGasMeter() {
  const { orgName, plantID } = useParams();
  const router = useRouter();
  const { meterId, applicationType } = router.query;

  const history = useHistory();
  function onSubmit(values) {
    if (values.dates[0] && values.dates[1] && meterId && applicationType) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.SUB_GAS_METER}`,
        search: stringifyUrlParam({
          meterType: applicationType,
          meterId,
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
          key: 'sub-gas-meter',
        }),
      });
    }
  }
  return (
    <ApiSuspense>
      {dummySubGasMeterData.monthlyAndTodaysDataSummary ? (
        <div>
          <Row>
            <ColDivider span={24}>
              <Wrapper align="center">
                <CustomTitle level={5}>
                  {dummySubGasMeterData.meterName}
                </CustomTitle>
              </Wrapper>
            </ColDivider>
          </Row>
          {/* Monthly and Todays Data Section */}
          <MeterBlock
            parameter={dummySubGasMeterData.monthlyAndTodaysDataSummary}
          />
          {/* Live Data Section */}
          <MeterBlock parameter={dummySubGasMeterData.liveDataSummary} />
          <Row>
            <ColPadding span={24}>
              <Wrapper height="502px">
                <GraphData meterId={meterId} />
              </Wrapper>
            </ColPadding>
          </Row>
          {/* KPI Section */}
          {dummySubGasMeterData.isMeterProducing === true ? (
            <MeterBlock parameter={dummySubGasMeterData.kpi} />
          ) : null}
          <Row>
            <ColPadding span={12}>
              <Wrapper>
                <SectionHeader name="Yesterday's Data" />
                <DividerPadding />
                <CustomTable
                  tableData={dummySubGasMeterData.yesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColPadding>
            <ColPadding span={12}>
              <Wrapper height="532px">
                <SectionHeader name="History" />
                <DividerPadding />
                <Row>
                  <Form onFinish={onSubmit}>
                    <ColDivider span={24}>
                      <Space>
                        <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                          <DateSelector
                            readingStartDate={
                              dummySubGasMeterData.firstGasMeterReading
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
            </ColPadding>
          </Row>
        </div>
      ) : null}
    </ApiSuspense>
  );
}

export default DefaultSubGasMeter;
