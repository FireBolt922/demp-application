import React from 'react';
import moment from 'moment';
import { Row, Space, Typography, Form } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock/MeterBlock.component';
import CustomTable from 'App/Common/UIComponents/CustomTable/CustomTable.component';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { stringifyUrlParam } from 'utilities/url';
import { PAGE } from 'App/Constants/app.constants';
import { useHistory, useParams } from 'react-router';
import { response } from './MainWaterMeter.utilities';
import GraphData from './components/GraphData';
import {
  ColPadding,
  DividerPadding,
  CustomButton,
} from './MainWaterMeter.styled';

function MainWaterMeter() {
  const history = useHistory();
  const { Title } = Typography;
  const { plantID, orgName } = useParams();

  function handleDate(values) {
    const meterId = 1;
    if (values.dates[0] && values.dates[1]) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/water-meter`,
        search: stringifyUrlParam({
          meterId,
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
          key: 'waterMeter',
        }),
      });
    }
  }
  return (
    <div>
      <ColPadding>
        <Wrapper>
          <Row justify="center">
            <Title level={5}>{response.meterName}</Title>
          </Row>
        </Wrapper>
      </ColPadding>
      <MeterBlock parameter={response.monthlyAndTodaysDataSummary} />
      <ColPadding>
        <Wrapper height="502px">
          <GraphData meterId="1" />
        </Wrapper>
      </ColPadding>
      <Row>
        <ColPadding span={12}>
          <Wrapper>
            <Title level={5}>Yesterdays Data</Title>
            <DividerPadding />
            <CustomTable
              tableData={response.aggregateData}
              title="Power Quality"
            />
          </Wrapper>
        </ColPadding>
        <ColPadding span={12}>
          <Form onFinish={handleDate}>
            <ColPadding>
              <Wrapper height="258px">
                <Title level={5}>History</Title>
                <DividerPadding />
                <Row>
                  <Space>
                    <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                      <DateSelector
                        readingStartDate={response.readingStartAt}
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
            </ColPadding>
          </Form>
        </ColPadding>
      </Row>
    </div>
  );
}

export default MainWaterMeter;
