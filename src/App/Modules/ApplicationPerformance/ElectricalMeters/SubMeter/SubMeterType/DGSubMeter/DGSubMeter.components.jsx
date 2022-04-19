import React from 'react';
import { Row, Col, Space, Form } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import { stringifyUrlParam } from 'utilities/url';
import PropTypes from 'prop-types';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import { PAGE } from 'App/Constants/app.constants';
import SectionHeader from './components/SectionHeader';
import GraphData from './components/GraphData';
import { dummyDGMeterData } from './DGSubMeter.utilities';
import {
  ColPadding,
  CustomTitle,
  DividerPadding,
  CustomButton,
} from './DGSubMeter.styled';

function DGSubMeter({ meterId }) {
  const { orgName, plantID } = useParams();
  const history = useHistory();

  function onSubmit(value) {
    if (
      value.dates[0] &&
      value.dates[1] &&
      meterId &&
      dummyDGMeterData.applicationType
    ) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
        search: stringifyUrlParam({
          meterType: dummyDGMeterData.applicationType,
          meterId,
          startDate: moment(value.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(value.dates[1]).format('YYYY-MM-DD'),
          key: 'subMeter',
        }),
      });
    }
  }
  return (
    <ApiSuspense>
      {dummyDGMeterData.DGDataSummary ? (
        <div>
          <Row>
            <ColPadding span={24}>
              <Wrapper align="center">
                <CustomTitle level={5}>
                  {dummyDGMeterData.meterName}
                </CustomTitle>
              </Wrapper>
            </ColPadding>
          </Row>
          {/* Monthly and Todays Data Section */}
          <MeterBlock parameter={dummyDGMeterData.DGDataSummary} />
          <Row>
            <ColPadding span={24}>
              <Wrapper height="502px">
                <GraphData meterId={meterId} />
              </Wrapper>
            </ColPadding>
          </Row>
          <Row>
            <ColPadding span={12}>
              <Wrapper>
                <SectionHeader name="Yesterday's Data" />
                <DividerPadding />
                <CustomTable
                  tableData={dummyDGMeterData.DGYesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColPadding>
            <ColPadding span={12}>
              <Col span={24}>
                <Wrapper height="405px">
                  <SectionHeader name="History" />
                  <DividerPadding />
                  <Row>
                    <Form onFinish={onSubmit}>
                      <ColPadding span={24}>
                        <Space>
                          <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                            <DateSelector
                              readingStartDate={
                                dummyDGMeterData.meterReadingStartDate
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
                      </ColPadding>
                    </Form>
                  </Row>
                </Wrapper>
              </Col>
            </ColPadding>
          </Row>
        </div>
      ) : null}
    </ApiSuspense>
  );
}

DGSubMeter.protoTypes = {
  meterId: PropTypes.string.isRequired,
};
export default DGSubMeter;
