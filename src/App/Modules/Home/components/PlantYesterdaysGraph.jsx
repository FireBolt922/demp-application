import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Empty, Typography, Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { CustomCol, TopScrollDiv, WrapperPadding } from '../HomePage.styled';
import Graph from './Graph';
import ZoomGraph from './ZoomGraph';

const { Title } = Typography;

function PlantYesterdaysGraph({ graphData, metaData }) {
  // Plant Yesterdays Graph
  const [showPopup, setShowPopup] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  function onClickViewGraph(currentData) {
    setSelectedData(currentData);
    setShowPopup(true);
  }

  function handleCancel() {
    setShowPopup(false);
  }
  return (
    <ApiSuspense meta={metaData}>
      {graphData.length > 2 ? (
        <TopScrollDiv
          overflow="scroll"
          overflowX="hidden"
          height={graphData.length > 1 ? '405px' : '405px'}
          width="100%"
        >
          <div>
            {graphData.map((item) => {
              return (
                <WrapperPadding span={24} key={item.plantName}>
                  <Wrapper>
                    <Row>
                      <Col span={12}>
                        <Row>
                          <Title level={5}>{item.plantName}</Title>
                        </Row>
                      </Col>
                      <CustomCol span={12} align="right">
                        <Button
                          id="expandGraph"
                          type="default"
                          icon={<EyeOutlined />}
                          onClick={() => onClickViewGraph(item)}
                        />
                      </CustomCol>
                    </Row>
                    <Row justify="center">Plant Demand Profile</Row>
                    {item.graphData.length > 0 ? (
                      <Graph
                        graphData={item.graphData}
                        dataLength={graphData.length}
                      />
                    ) : (
                      <Empty imageStyle={{ height: '85px' }} />
                    )}
                  </Wrapper>
                </WrapperPadding>
              );
            })}
          </div>
        </TopScrollDiv>
      ) : (
        <>
          {graphData.map((item) => {
            return (
              <WrapperPadding span={24} key={item.plantName}>
                <Wrapper height={graphData.length === 2 ? '178px' : '244px'}>
                  <Row>
                    <Col span={12}>
                      <Title level={5}>{item.plantName}</Title>
                    </Col>
                    <CustomCol span={12} align="right">
                      <Button
                        id="expandGraph"
                        type="default"
                        icon={<EyeOutlined />}
                        onClick={() => onClickViewGraph(item)}
                      />
                    </CustomCol>
                  </Row>
                  <Row justify="center">Plant Demand Profile</Row>
                  {item.graphData.length > 0 ? (
                    <Graph
                      graphData={item.graphData}
                      dataLength={graphData.length}
                    />
                  ) : (
                    <Empty imageStyle={{ height: '85px' }} />
                  )}
                </Wrapper>
              </WrapperPadding>
            );
          })}
        </>
      )}
      {/* Modal */}
      <Modal
        title="Plant Demand Profile"
        visible={showPopup}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
      >
        <ZoomGraph selectedParams={selectedData} handleCancel={handleCancel} />
      </Modal>
    </ApiSuspense>
  );
}
PlantYesterdaysGraph.propTypes = {
  graphData: PropTypes.array.isRequired,
  metaData: PropTypes.object.isRequired,
};
export default PlantYesterdaysGraph;
