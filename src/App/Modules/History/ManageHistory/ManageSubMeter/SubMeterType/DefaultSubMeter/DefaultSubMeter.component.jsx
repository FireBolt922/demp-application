import React, { useState, useEffect } from 'react';
import { Row, Col, Space, Form, Select, Typography } from 'antd';
import PropTypes from 'prop-types';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import BarLineGraph from 'App/Common/UIComponents/BarLineGraph';
import { Wrapper } from 'App/Common/UIComponents/BarLineGraph/BarLine.styled';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import moment from 'moment';
import { PAGE } from 'App/Constants/app.constants';
import { useHistory, useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import KeyPerformanceSection from './components/KeyPerformanceSection';
import {
  MiniBox,
  FormCol,
  FormButton,
  DividerPadding,
  TextCenter,
  CustomFormItem,
  CustomSelect,
} from './DefaultSubMeter.styled';
import { dummyDefaultSubMeterHistory } from './DefaultSubMeter.utilities';

const { Title } = Typography;
function DefaultSubMeter({
  meterId,
  meterType,
  startDate,
  endDate,
  meterList,
}) {
  const { orgName, plantID } = useParams();
  const [readingStartDate, setReadingStartDate] = useState();
  const [form] = Form.useForm();
  const allSubMeterHistory = dummyDefaultSubMeterHistory;
  const history = useHistory();
  function onChangeHandle(data) {
    meterList.forEach((item) => {
      if (parseInt(data.split('+')[0], 10) === item.id) {
        setReadingStartDate(item.readingStartDate);
      }
    });
  }
  useEffect(() => {
    if (meterList) {
      meterList.forEach((item) => {
        if (Number(meterId) === item.id) {
          setReadingStartDate(item.readingStartDate);
        }
      });
    }
    form.setFieldsValue({
      formMeterId: `${Number(meterId)}+${Number(meterType)}`,
      dates: [startDate, endDate],
    });
  }, [meterId, meterType, form, meterList, endDate, startDate]);
  const onFinish = (values) => {
    const subMeterId = parseInt(values.formMeterId.split('+')[0], 10);
    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`,
      search: stringifyUrlParam({
        meterType: parseInt(values.formMeterId.split('+')[1], 10),
        meterId: subMeterId,
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
  };
  return (
    <ApiSuspense>
      <div>
        <MiniBox>
          <Row>
            <FormCol span={24}>
              <Form form={form} onFinish={onFinish}>
                <Space>
                  <CustomFormItem
                    name="formMeterId"
                    rules={[
                      { required: true, message: 'Please select Meter!' },
                    ]}
                  >
                    <CustomSelect
                      placeholder="Please Select Meter"
                      onChange={onChangeHandle}
                      id="select"
                    >
                      {meterList
                        ? meterList.map((item) => (
                            <Select.Option
                              key={item.id}
                              value={`${item.id}+${item.applicationType}`}
                            >
                              {item.name}
                            </Select.Option>
                          ))
                        : null}
                    </CustomSelect>
                  </CustomFormItem>
                  <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                    <DateSelector
                      historyStartDate={moment(startDate)}
                      historyEndDate={moment(endDate)}
                      readingStartDate={readingStartDate}
                    />
                  </Form.Item>
                  <Form.Item>
                    <FormButton
                      shape="round"
                      type="primary"
                      htmlType="submit"
                      name="Submit"
                      id="submit"
                    >
                      SUBMIT
                    </FormButton>
                  </Form.Item>
                </Space>
              </Form>
            </FormCol>
          </Row>
        </MiniBox>
        {allSubMeterHistory.energyParameters ? (
          <Row>
            {allSubMeterHistory.energyParameters.map((item) => {
              return (
                <Col span={6} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })}
          </Row>
        ) : null}
        <Row>
          <Col span={24}>
            <Wrapper>
              <TextCenter span={24}>
                <Title level={5}>Graph</Title>
                <DividerPadding />
              </TextCenter>
              <Col span={24}>
                {allSubMeterHistory.graphTitle ? (
                  <BarLineGraph
                    data={allSubMeterHistory.graphData}
                    barName={allSubMeterHistory.graphTitle.barName}
                    lineName={allSubMeterHistory.graphTitle.lineName}
                  />
                ) : null}
              </Col>
            </Wrapper>
          </Col>
        </Row>
        {allSubMeterHistory.isProducing === true ? (
          <Row>
            <Col span={24}>
              <Wrapper>
                <Col span={24}> Note: {allSubMeterHistory.note}</Col>
              </Wrapper>
            </Col>
            <Col span={24}>
              <KeyPerformanceSection data={allSubMeterHistory} />
            </Col>
          </Row>
        ) : null}
      </div>
    </ApiSuspense>
  );
}
DefaultSubMeter.protoTypes = {
  meterId: PropTypes.string.isRequired,
  meterType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.string.isRequired,
};

export default DefaultSubMeter;
