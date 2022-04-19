import React from 'react';
import moment from 'moment';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row, Table, Space, Typography, Form } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import CustomCollapse from 'App/Common/UIComponents/CustomCollapse/CustomCollapse';
import BarLineGraph from 'App/Common/UIComponents/BarLineGraph';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import { stringifyUrlParam } from 'utilities/url';
import DateSelector from 'App/Common/Functionalities/DateSelector/DateSelector';
import SectionHeader from './components/SectionHeader';
import {
  ColPadding,
  ColDivider,
  DividerPadding,
  TextCenter,
  FormButton,
} from './PlantPerformance.styled';
import ParamBox from './components/ParamBox';
import ParameterBox from './components/ParameterBox';
import { COLUMNS } from './PlantPerformance.constants';
import { dummyPlantPerformanceData } from './PlantPerformance.utilities';

const { Title } = Typography;
function PlantPerformance() {
  const { plantID, orgName } = useParams();
  const plantPerData = dummyPlantPerformanceData;
  const { plantStartDate } = plantPerData;
  const history = useHistory();
  const getHistory = (values) => {
    if (values.date[0] && values.date[1]) {
      history.push({
        pathname: `/org/${orgName}/${plantID}/history/plant-performance`,
        search: stringifyUrlParam({
          startDate: moment(values.date[0]).format('YYYY-MM-DD'),
          endDate: moment(values.date[1]).format('YYYY-MM-DD'),
        }),
      });
    }
  };

  return (
    <div>
      <ApiSuspense>
        {plantPerData.productionAvailability === true ? (
          <div>
            <Row>
              <ColDivider span={24}>
                <Wrapper align="center">
                  <SectionHeader name="YESTERDAYS DATA" />
                </Wrapper>
              </ColDivider>
            </Row>
            <Row>
              {plantPerData.firstBlock
                ? plantPerData.firstBlock.map((item) => {
                    return (
                      <ColDivider span={8} key={item.key}>
                        <Wrapper>
                          <ParamBox label={item.name} value={item.value} />
                        </Wrapper>
                      </ColDivider>
                    );
                  })
                : null}
            </Row>
            <Row>
              {plantPerData.secondBlock
                ? plantPerData.secondBlock.map((item) => {
                    return (
                      <ColDivider span={12} key={item.key}>
                        <Wrapper>
                          <ParameterBox label={item.name} value={item.value} />
                        </Wrapper>
                      </ColDivider>
                    );
                  })
                : null}
            </Row>
            <Row>
              <ColPadding span={24}>
                <Wrapper>
                  <TextCenter span={24}>
                    <Title level={5}>Graph</Title>
                    <DividerPadding />
                  </TextCenter>
                  <Col span={24}>
                    <BarLineGraph
                      data={plantPerData.graphData}
                      barName="kWh"
                      lineName="kVA"
                    />
                  </Col>
                </Wrapper>
              </ColPadding>
            </Row>
            <ColPadding span={24}>
              <CustomCollapse
                header="Plant Energy Consumption Summary"
                body={
                  <Table
                    dataSource={plantPerData.energyConsumptionSummary}
                    columns={COLUMNS}
                    pagination={false}
                    bordered
                  />
                }
              />
            </ColPadding>
            <Row>
              <ColPadding span={12}>
                <Wrapper>
                  <Row>
                    <Col span={24}>
                      <Title level={5}>Power Quality</Title>
                      <DividerPadding />
                    </Col>
                    <Col span={12}>
                      {plantPerData.firstTable ? (
                        <CustomTable tableData={plantPerData.firstTable} />
                      ) : null}
                    </Col>
                    <Col span={12}>
                      {plantPerData.secondTable ? (
                        <CustomTable tableData={plantPerData.secondTable} />
                      ) : null}
                    </Col>
                  </Row>
                </Wrapper>
              </ColPadding>
              <ColPadding span={12}>
                <Wrapper height="180px">
                  <Title level={5}>History</Title>
                  <DividerPadding />
                  <Form onFinish={getHistory}>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="date"
                          rules={[
                            {
                              required: true,
                              message: 'Please select date!',
                            },
                          ]}
                        >
                          <DateSelector readingStartDate={plantStartDate} />
                        </Form.Item>
                      </Col>
                      <TextCenter span={12}>
                        <Form.Item>
                          <FormButton
                            type="primary"
                            shape="round"
                            htmlType="submit"
                          >
                            Submit
                          </FormButton>
                        </Form.Item>
                      </TextCenter>
                    </Row>
                  </Form>
                </Wrapper>
              </ColPadding>
            </Row>
          </div>
        ) : (
          <div>
            <ColPadding>
              <Wrapper>
                <Title level={5} type="danger">
                  <Col offset={9}>Note: {plantPerData.note}</Col>
                </Title>
              </Wrapper>
            </ColPadding>
            <Row>
              <ColDivider span={24}>
                <Wrapper>
                  <SectionHeader name="History" />
                  <DividerPadding />
                  <Form onFinish={getHistory}>
                    <Row>
                      <TextCenter span={24}>
                        <Space>
                          <Form.Item
                            name="date"
                            rules={[
                              {
                                required: true,
                                message: 'Please select date!',
                              },
                            ]}
                          >
                            <DateSelector readingStartDate={plantStartDate} />
                          </Form.Item>
                          <Form.Item>
                            <FormButton
                              type="primary"
                              shape="round"
                              htmlType="submit"
                            >
                              Submit
                            </FormButton>
                          </Form.Item>
                        </Space>
                      </TextCenter>
                    </Row>
                  </Form>
                </Wrapper>
              </ColDivider>
            </Row>
          </div>
        )}
      </ApiSuspense>
    </div>
  );
}

export default PlantPerformance;
