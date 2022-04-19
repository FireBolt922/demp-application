import React from 'react';
import { PAGE } from 'App/Constants/app.constants';
import { Row, Form, Space } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { stringifyUrlParam } from 'utilities/url';
import GraphData from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/HtMeterTypes/Transformer/components/GraphData';
import TransformerLossSavingPotential from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/HtMeterTypes/Transformer/components/TransformerLossSavingPotential';
import TransformerKeyParameters from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/HtMeterTypes/Transformer/components/TransformerKeyParameters';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import SectionHeader from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/HtMeterTypes/Transformer/components/SectionHeader';
import useRouter from 'react-hooks/router';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import CustomCollapse from 'App/Common/UIComponents/CustomCollapse/CustomCollapse';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import {
  ColPadding,
  ColDivider,
  DividerPadding,
  CustomTitle,
  CustomButton,
} from './Transformer.styled';
import { dummyHtMeterData } from './Transformer.utilities';

function Transformer() {
  const { orgName, plantID } = useParams();
  const router = useRouter();
  const { meterId } = router.query;
  const history = useHistory();

  function handleDate(values) {
    if (values.dates[0] && values.dates[1]) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/ht-meter`,
        search: stringifyUrlParam({
          meterId,
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
          key: 'htMeter',
        }),
      });
    }
  }
  return (
    <ApiSuspense>
      {dummyHtMeterData.monthlyAndTodaysDataSummary ? (
        <div>
          <Row>
            <ColDivider span={24}>
              <Wrapper align="center">
                <CustomTitle level={5}>
                  {dummyHtMeterData.meterName}
                </CustomTitle>
              </Wrapper>
            </ColDivider>
          </Row>
          {/* Month and todays data section */}
          <MeterBlock
            parameter={dummyHtMeterData.monthlyAndTodaysDataSummary}
          />
          {/* Live Data Section */}
          <MeterBlock parameter={dummyHtMeterData.liveDataSummary} />
          <Row>
            <ColPadding span={24}>
              <Wrapper height="502px">
                <GraphData meterId={meterId} />
              </Wrapper>
            </ColPadding>
          </Row>
          <Row>
            <ColPadding span={24}>
              <Wrapper>
                <TransformerLossSavingPotential
                  transformerData={
                    dummyHtMeterData.yesterdaysTransformerAnalysis
                      .transformerData
                  }
                />
                <TransformerKeyParameters
                  transformerKeyParameters={
                    dummyHtMeterData.yesterdaysTransformerAnalysis
                      .transformerKeyParameters
                  }
                />
              </Wrapper>
            </ColPadding>
          </Row>
          <Row>
            <ColPadding span={24}>
              <CustomCollapse
                header="Yesterday's Analysis of PF and Reactive Energy"
                body={
                  <Row>
                    <ColPadding span={12}>
                      <CustomTable
                        tableData={
                          dummyHtMeterData
                            .yesterdaysAnalysisOfPFAndReactiveEnergy.firstTable
                        }
                      />
                    </ColPadding>
                    <ColPadding span={12}>
                      <CustomTable
                        tableData={
                          dummyHtMeterData
                            .yesterdaysAnalysisOfPFAndReactiveEnergy.secondTable
                        }
                      />
                    </ColPadding>
                  </Row>
                }
              />
            </ColPadding>
          </Row>
          <Row>
            <ColPadding span={12}>
              <Wrapper>
                <SectionHeader name="Yesterday's Data" />
                <DividerPadding />
                <CustomTable
                  tableData={dummyHtMeterData.aggregateData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColPadding>
            <ColPadding span={12}>
              <Form onFinish={handleDate}>
                <Wrapper height="375px">
                  <SectionHeader name="History" />
                  <DividerPadding />
                  <Row>
                    <Space>
                      <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                        <DateSelector
                          readingStartDate={dummyHtMeterData.readingStartAt}
                        />
                      </Form.Item>

                      <Form.Item>
                        <CustomButton
                          type="primary"
                          htmlType="submit"
                          shape="round"
                          name="Submit"
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

export default Transformer;
