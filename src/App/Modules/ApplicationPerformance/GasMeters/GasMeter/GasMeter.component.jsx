import React from 'react';
import { PAGE } from 'App/Constants/app.constants';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { useHistory, useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import moment from 'moment';
import useRouter from 'react-hooks/router';
import { Row, Form, Space } from 'antd';
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
} from './GasMeter.styled';
import { dummyGasMeterData } from './GasMeter.utilities';

function GasMeter() {
  const { orgName, plantID } = useParams();
  const router = useRouter();
  const { meterId } = router.query;

  const history = useHistory();

  function handleDate(values) {
    if (values.dates[0] && values.dates[1]) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/gas-meter`,
        search: stringifyUrlParam({
          meterId,
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
          key: 'gasMeter',
        }),
      });
    }
  }

  return (
    <ApiSuspense>
      {dummyGasMeterData.monthlyAndTodaysDataSummary ? (
        <div>
          <Row>
            <ColDivider span={24}>
              <Wrapper align="center">
                <CustomTitle level={5}>
                  {dummyGasMeterData.meterName}
                </CustomTitle>
              </Wrapper>
            </ColDivider>
          </Row>
          {/* Monthly and Todays data section */}
          <MeterBlock
            parameter={dummyGasMeterData.monthlyAndTodaysDataSummary}
          />
          {/* Live data section */}
          <MeterBlock parameter={dummyGasMeterData.liveDataSummary} />
          <Row>
            <ColPadding span={24}>
              <Wrapper height="502px">
                <GraphData meterId={meterId} />
              </Wrapper>
            </ColPadding>
          </Row>
          {dummyGasMeterData.isMeterProducing === true ? (
            <MeterBlock parameter={dummyGasMeterData.kpi} />
          ) : null}
          <Row>
            <ColPadding span={12}>
              <Wrapper>
                <SectionHeader name="Yesterday's Data" />
                <DividerPadding />
                <CustomTable
                  tableData={dummyGasMeterData.yesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColPadding>
            <ColPadding span={12}>
              <Form onFinish={handleDate}>
                <Wrapper height="532px">
                  <SectionHeader name="History" />
                  <DividerPadding />
                  <Row>
                    <Space>
                      <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                        <DateSelector
                          readingStartDate={
                            dummyGasMeterData.firstGasMeterReading
                          }
                        />
                      </Form.Item>

                      <Form.Item>
                        <CustomButton
                          type="primary"
                          htmlType="submit"
                          shape="round"
                          name="Submit"
                          id="submit"
                        >
                          Submit
                        </CustomButton>
                      </Form.Item>
                    </Space>
                  </Row>
                </Wrapper>
              </Form>
            </ColPadding>
          </Row>
        </div>
      ) : null}
    </ApiSuspense>
  );
}

export default GasMeter;
