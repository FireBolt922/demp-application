import moment from 'moment';
import React from 'react';
import { PAGE } from 'App/Constants/app.constants';
import { Row, Col, Space, Form } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import { stringifyUrlParam } from 'utilities/url';
import PropTypes from 'prop-types';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import {
  ColPadding,
  CustomTitle,
  DividerPadding,
  CustomButton,
} from './SolarSubMeter.styled';
import SectionHeader from './components/SectionHeader';
import GraphData from './components/GraphData';
import { dummySolarSubMeterData } from './SolarSubMeter.utilities';

function SolarSubMeter({ meterId }) {
  const { orgName, plantID } = useParams();
  const history = useHistory();

  function onSubmit(values) {
    if (
      values.dates[0] &&
      values.dates[1] &&
      meterId &&
      dummySolarSubMeterData.applicationType
    ) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
        search: stringifyUrlParam({
          meterType: dummySolarSubMeterData.applicationType,
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
      {dummySolarSubMeterData.solarDataSummary ? (
        <div>
          <ColPadding span={24}>
            <Wrapper align="center">
              <CustomTitle level={5}>
                {dummySolarSubMeterData.meterName}
              </CustomTitle>
            </Wrapper>
          </ColPadding>
          {/* Monthly and Live Data Section */}
          <MeterBlock parameter={dummySolarSubMeterData.solarDataSummary} />
          <Row>
            {dummySolarSubMeterData.energyParameters.map((item) => {
              return (
                <Col span={8} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })}
          </Row>
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
                  tableData={dummySolarSubMeterData.yesterdaysData}
                  title="Power Quality"
                />
              </Wrapper>
            </ColPadding>
            <ColPadding span={12}>
              <Wrapper height="369px">
                <SectionHeader name="History" />
                <DividerPadding />
                <Row>
                  <Form onFinish={onSubmit}>
                    <Col span={24}>
                      <Space>
                        <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                          <DateSelector
                            readingStartDate={
                              dummySolarSubMeterData.meterReadingStartDate
                            }
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
                    </Col>
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

SolarSubMeter.protoTypes = {
  meterId: PropTypes.string.isRequired,
};
export default SolarSubMeter;
