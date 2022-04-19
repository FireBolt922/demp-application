import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row, Space, Typography, Divider, Form } from 'antd';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { stringifyUrlParam } from 'utilities/url';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import CustomDropdown from 'App/Modules/History/ManageHistory/HistoryMeterUI/components/CustomDropdown/CustomDropdown.component';
import { FormButton, CustomFormItem } from './HistoryMeterUI.styled';

const { Title } = Typography;
function HistoryMeterUI({ meterList, meterType, plantStartDate }) {
  const { orgName, plantID } = useParams();

  const [applicationType, setApplicationType] = useState(null);
  const [readingStartDate, setReadingStartDate] = useState(plantStartDate);
  const history = useHistory();

  // routes the page to meter and plant specific components
  const onFinish = (values) => {
    switch (meterType) {
      case 'htMeter':
        history.push({
          pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/ht-meter`,
          search: stringifyUrlParam({
            meterId: values.formMeterId,
            startDate: moment(values.dateselected[0]).format('YYYY-MM-DD'),
            endDate: moment(values.dateselected[1]).format('YYYY-MM-DD'),
          }),
        });
        break;
      case 'subMeter':
        history.push({
          pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
          search: stringifyUrlParam({
            meterType: applicationType,
            meterId: values.formMeterId,
            startDate: moment(values.dateselected[0]).format('YYYY-MM-DD'),
            endDate: moment(values.dateselected[1]).format('YYYY-MM-DD'),
          }),
        });
        break;
      case 'gasMeter':
        history.push({
          pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/gas-meter`,
          search: stringifyUrlParam({
            meterId: values.formMeterId,
            startDate: moment(values.dateselected[0]).format('YYYY-MM-DD'),
            endDate: moment(values.dateselected[1]).format('YYYY-MM-DD'),
          }),
        });
        break;
      case 'subGasMeter':
        history.push({
          pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.SUB_GAS_METER}`,
          search: stringifyUrlParam({
            meterType: applicationType,
            meterId: values.formMeterId,
            startDate: moment(values.dateselected[0]).format('YYYY-MM-DD'),
            endDate: moment(values.dateselected[1]).format('YYYY-MM-DD'),
          }),
        });
        break;
      default:
        history.push({
          pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.PLANT_PERFORMANCE}`,
          search: stringifyUrlParam({
            startDate: moment(values.dateselected[0]).format('YYYY-MM-DD'),
            endDate: moment(values.dateselected[1]).format('YYYY-MM-DD'),
          }),
        });
    }
  };
  return (
    <ApiSuspense>
      <Form id="form" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Wrapper align="center">
              <Row>
                <Col span={24}>
                  <Title level={5}>History</Title>
                  <Divider />
                </Col>
                <Col span={24}>
                  <Space>
                    <Col span={24}>
                      {meterType ? (
                        <CustomFormItem
                          name="formMeterId"
                          rules={[
                            { required: true, message: 'Please Select Meter' },
                          ]}
                        >
                          {meterList ? (
                            <CustomDropdown
                              meterList={meterList}
                              handleDropdownValues={(
                                selectedMeterType,
                                readingMeterStartDate,
                              ) => {
                                setApplicationType(selectedMeterType);
                                setReadingStartDate(readingMeterStartDate);
                              }}
                            />
                          ) : null}
                        </CustomFormItem>
                      ) : null}
                    </Col>
                    <Col span={24}>
                      <Form.Item name="dateselected" rules={SELECT_DATE_RULE}>
                        <DateSelector readingStartDate={readingStartDate} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <FormButton
                          name="Submit"
                          shape="round"
                          type="primary"
                          htmlType="submit"
                          id="submit"
                        >
                          Submit
                        </FormButton>
                      </Form.Item>
                    </Col>
                  </Space>
                </Col>
              </Row>
            </Wrapper>
          </Col>
        </Row>
      </Form>
    </ApiSuspense>
  );
}
HistoryMeterUI.protoTypes = {
  meterList: PropTypes.object.isRequired,
  meterType: PropTypes.string.isRequired,
  plantStartDate: PropTypes.object.isRequired,
};
export default HistoryMeterUI;
