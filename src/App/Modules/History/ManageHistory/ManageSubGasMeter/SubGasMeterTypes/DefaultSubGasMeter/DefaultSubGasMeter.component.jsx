import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col, Space, Form, Select, Typography } from 'antd';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { PAGE } from 'App/Constants/app.constants';
import { stringifyUrlParam } from 'utilities/url';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import DateSelector from 'App/Common/Functionalities/DateSelector';
import BarGraph from 'App/Common/UIComponents/BarGraph';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import { subGasMeterHistoryService } from 'App/Modules/History/ManageHistory/ManageSubGasMeter/SubGasMeterTypes/DefaultSubGasMeter/DefaultSubGasMeter.service';
import { subGasMeterHistoryTransformer } from 'App/Modules/History/ManageHistory/ManageSubGasMeter/SubGasMeterTypes/DefaultSubGasMeter/DefaultSubGasMeter.utilities';
import {
  ColPadding,
  FormButton,
  CustomTitle,
  DividerPadding,
  TextCenter,
} from 'App/Modules/History/ManageHistory/ManageSubGasMeter/SubGasMeterTypes/DefaultSubGasMeter/DefaultSubGasMeter.styled';
import ParamBox from 'App/Common/UIComponents/ParamBox';

const { Title } = Typography;
function DefaultSubGasMeter({
  meterType,
  meterId,
  startDate,
  endDate,
  meterList,
}) {
  const { orgName, plantID } = useParams();
  const [form] = Form.useForm();
  const [readingStartDate, setReadingStartDate] = useState();
  const history = useHistory();

  const {
    response: subGasMeterHistoryData,
    network: metaSubGasMeterHistory,
    call: updateHistoryCall,
  } = network.useNetwork(subGasMeterHistoryService, {
    auto: true,
    autoCallArgs: [plantID, meterId, startDate, endDate],
    transformer: subGasMeterHistoryTransformer,
  });

  function selectMeter(data) {
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
      dates: [moment(startDate), moment(endDate)],
    });
  }, [
    meterId,
    startDate,
    endDate,
    form,
    meterList,
    setReadingStartDate,
    meterType,
  ]);
  const onFinish = (values) => {
    const gasMeterId = parseInt(values.formMeterId.split('+')[0], 10);

    history.push({
      pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.SUB_GAS_METER}`,
      search: stringifyUrlParam({
        meterType: parseInt(values.formMeterId.split('+')[1], 10),
        meterId: gasMeterId,
        startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
        endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
      }),
    });
    // Call
    if (parseInt(values.formMeterId.split('+')[1], 10) === 1) {
      updateHistoryCall(
        plantID,
        gasMeterId,
        moment(values.dates[0]).format('YYYY-MM-DD'),
        moment(values.dates[1]).format('YYYY-MM-DD'),
      );
    }
  };
  return (
    <ApiSuspense meta={metaSubGasMeterHistory}>
      <Row>
        <ColPadding span={24}>
          <Wrapper align="center" height="52px">
            <Form form={form} onFinish={onFinish}>
              <Space>
                <Form.Item
                  name="formMeterId"
                  rules={[{ required: true, message: 'Please select Meter!' }]}
                >
                  <Select
                    placeholder="Please Select Meter"
                    style={{ width: '250px' }}
                    onChange={selectMeter}
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
                  </Select>
                </Form.Item>
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
                  >
                    SUBMIT
                  </FormButton>
                </Form.Item>
              </Space>
            </Form>
          </Wrapper>
        </ColPadding>
      </Row>
      <Row>
        {subGasMeterHistoryData.aggregateData
          ? subGasMeterHistoryData.aggregateData.map((item) => {
              return (
                <Col span={8} key={item.key}>
                  <ParamBox label={item.params} value={item.value} />
                </Col>
              );
            })
          : null}
      </Row>
      <Row>
        {subGasMeterHistoryData.isProducing ? (
          <ColPadding span={24}>
            <Wrapper align="center">
              <CustomTitle level={5}>Key Performance Indicators</CustomTitle>
              <DividerPadding />
              <Row>
                {subGasMeterHistoryData.kpi
                  ? subGasMeterHistoryData.kpi.map((item) => {
                      return (
                        <Col span={8} key={item.key}>
                          <ParamBox label={item.name} value={item.value} />
                        </Col>
                      );
                    })
                  : null}
              </Row>
            </Wrapper>
          </ColPadding>
        ) : null}
      </Row>
      {subGasMeterHistoryData.isMeterProducing ? (
        <MeterBlock parameter={subGasMeterHistoryData.kpi} />
      ) : null}
      <Row>
        <ColPadding span={24}>
          <Wrapper>
            <TextCenter span={24}>
              <Title level={5}>Graph</Title>
              <DividerPadding />
            </TextCenter>
            <Col span={24}>
              {subGasMeterHistoryData.graphData ? (
                <BarGraph
                  data={subGasMeterHistoryData.graphData}
                  barName={`Gas Consumption (${subGasMeterHistoryData.meterUnit})`}
                />
              ) : null}
            </Col>
          </Wrapper>
        </ColPadding>
      </Row>
      <Row>
        {subGasMeterHistoryData.isMeterProducing === true ? (
          <ColPadding span={24}>
            <Wrapper>
              <strong>Note:</strong>
              {subGasMeterHistoryData.note}
            </Wrapper>
          </ColPadding>
        ) : null}
      </Row>
    </ApiSuspense>
  );
}
DefaultSubGasMeter.protoTypes = {
  meterId: PropTypes.number.isRequired,
  meterType: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  meterList: PropTypes.array.isRequired,
};
export default DefaultSubGasMeter;
