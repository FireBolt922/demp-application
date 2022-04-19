import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col, Table, Space, Form, Typography } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import BarLineGraph from 'App/Common/UIComponents/BarLineGraph';
import PropTypes from 'prop-types';
import { PAGE } from 'App/Constants/app.constants';
import CustomCollapse from 'App/Common/UIComponents/CustomCollapse/CustomCollapse';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { SELECT_DATE_RULE } from 'App/Common/Functionalities/SelectDateRules/SelectDateRules';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import moment from 'moment';
import { stringifyUrlParam } from 'utilities/url';
import { WrapperPadding } from 'App/Modules/Home/HomePage.styled';
import SectionHeader from './components/SectionHeader';
import {
  ColPaddingCenter,
  DividerPadding,
  FormButton,
  TextCenter,
} from './PlantPerformanceHistory.styled';
import ParamBox from './components/ParamBox';
import { COLUMNS } from './PlantPerformanceHistory.constants';
import ParameterBox from './components/ParameterBox';
import { dummyPlantPerData } from './PlantPerformanceHistory.utilities';

const { Text } = Typography;
function PlantPerformanceHistory({ startDate, endDate, plantStartDate }) {
  const { orgName, plantID } = useParams();
  const [form] = Form.useForm();
  const history = useHistory();

  const plantPerHistory = dummyPlantPerData;
  useEffect(() => {
    form.setFieldsValue({
      dates: [startDate, endDate],
    });
  }, [form, startDate, endDate]);

  const onFinish = (values) => {
    if (
      moment(values.dates[0]).format('YYYY-MM-DD') &&
      moment(values.dates[1]).format('YYYY-MM-DD') &&
      plantID
    ) {
      history.push({
        pathname: `/org/${orgName}/${plantID}${PAGE.HISTORY}/plant-performance`,
        search: stringifyUrlParam({
          startDate: moment(values.dates[0]).format('YYYY-MM-DD'),
          endDate: moment(values.dates[1]).format('YYYY-MM-DD'),
        }),
      });
    }
  };
  return (
    <ApiSuspense>
      {plantPerHistory.productionAvailability === true ? (
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              date: [startDate, endDate],
            }}
          >
            <Row>
              <WrapperPadding span={24}>
                <Wrapper align="center" height="7vh">
                  <Space>
                    <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                      <DateSelector
                        readingStartDate={plantStartDate}
                        historyStartDate={moment(startDate)}
                        historyEndDate={moment(endDate)}
                      />
                    </Form.Item>
                    <Form.Item>
                      <FormButton
                        shape="round"
                        type="primary"
                        htmlType="submit"
                      >
                        SUBMIT
                      </FormButton>
                    </Form.Item>
                  </Space>
                </Wrapper>
              </WrapperPadding>
            </Row>
          </Form>
          <Row>
            {plantPerHistory.firstBlock
              ? plantPerHistory.firstBlock.map((item) => {
                  return (
                    <ColPaddingCenter span={8} key={item.key}>
                      <Wrapper>
                        <ParamBox label={item.name} value={item.value} />
                      </Wrapper>
                    </ColPaddingCenter>
                  );
                })
              : null}
          </Row>
          <Row>
            {plantPerHistory.secondBlock
              ? plantPerHistory.secondBlock.map((item) => {
                  return (
                    <ColPaddingCenter span={12} key={item.key}>
                      <Wrapper>
                        <ParameterBox label={item.name} value={item.value} />
                      </Wrapper>
                    </ColPaddingCenter>
                  );
                })
              : null}
          </Row>
          <Row>
            <WrapperPadding span={24}>
              <Wrapper>
                <TextCenter span={24}>
                  <SectionHeader name="Graph" />
                  <DividerPadding />
                </TextCenter>
                <Col span={24}>
                  <BarLineGraph
                    data={plantPerHistory.graphData}
                    barName={
                      plantPerHistory.multipleDay === true
                        ? `kWh/${plantPerHistory.plantUnit}`
                        : 'kWh'
                    }
                    lineName={
                      plantPerHistory.multipleDay === true ? 'kWh' : 'kVA'
                    }
                  />
                </Col>
              </Wrapper>
            </WrapperPadding>
          </Row>
          <Row>
            <WrapperPadding span={24}>
              <Wrapper>
                <CustomCollapse
                  id="plant-energy-collapse"
                  header="Plant Energy Consumption Summary"
                  body={
                    <Table
                      key="1"
                      dataSource={plantPerHistory.energyConsumptionSummary}
                      columns={COLUMNS}
                      pagination={false}
                      bordered
                    />
                  }
                />
              </Wrapper>
            </WrapperPadding>
          </Row>
          <Row>
            <WrapperPadding span={24}>
              <Wrapper>
                <CustomCollapse
                  header="Power Factor Analysis"
                  body={
                    <Row>
                      <Col span={12}>
                        {plantPerHistory.powerFactorFirstTable ? (
                          <CustomTable
                            tableData={plantPerHistory.powerFactorFirstTable}
                          />
                        ) : null}
                      </Col>
                      <Col span={12}>
                        {plantPerHistory.powerFactorSecondTable ? (
                          <CustomTable
                            tableData={plantPerHistory.powerFactorSecondTable}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  }
                />
              </Wrapper>
            </WrapperPadding>
          </Row>
          <Row>
            <WrapperPadding span={12}>
              <Wrapper>
                <WrapperPadding span={24}>
                  <SectionHeader name="Power Quality" />
                  <DividerPadding />
                </WrapperPadding>
                <WrapperPadding>
                  {plantPerHistory.powerQualityFirstTable ? (
                    <CustomTable
                      tableData={plantPerHistory.powerQualityFirstTable}
                    />
                  ) : null}
                </WrapperPadding>
              </Wrapper>
            </WrapperPadding>
            <WrapperPadding span={12}>
              <Wrapper>
                <WrapperPadding span={24}>
                  <SectionHeader name="Power Factor (LEAD/LAG)" />
                  <DividerPadding />
                </WrapperPadding>
                <WrapperPadding>
                  {plantPerHistory.powerQualitySecondTable ? (
                    <CustomTable
                      tableData={plantPerHistory.powerQualitySecondTable}
                    />
                  ) : null}
                </WrapperPadding>
              </Wrapper>
            </WrapperPadding>
          </Row>
        </div>
      ) : (
        <Row>
          <WrapperPadding span={24}>
            <Wrapper align="center" height="52px">
              <Form form={form} onFinish={onFinish}>
                <Space>
                  <Form.Item name="dates" rules={SELECT_DATE_RULE}>
                    <DateSelector readingStartDate={plantStartDate} />
                  </Form.Item>
                  <Form.Item>
                    <FormButton shape="round" type="primary" htmlType="submit">
                      SUBMIT
                    </FormButton>
                  </Form.Item>
                </Space>
              </Form>
            </Wrapper>
          </WrapperPadding>

          <WrapperPadding span={24}>
            <Wrapper align="center">
              <Text>Note: {plantPerHistory.note}</Text>
            </Wrapper>
          </WrapperPadding>
        </Row>
      )}
    </ApiSuspense>
  );
}
PlantPerformanceHistory.protoTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  plantStartDate: PropTypes.string.isRequired,
};
export default PlantPerformanceHistory;
