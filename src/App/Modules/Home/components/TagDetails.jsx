import React from 'react';
import { Row, Col, Carousel } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import PropTypes from 'prop-types';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  ColPadding,
  CustomText,
  CustomEmpty,
  CustomButton,
} from '../HomePage.styled';
import PieChart from './PieChart';
import 'App/Modules/Home/HomePage.css';

function TagDetails({ data, metaData }) {
  let elementCount;
  if (data.tagData) {
    if (data.tagData.length > 1) {
      elementCount = 2;
    } else {
      elementCount = 1;
    }
  }
  const carouselSettings = {
    arrows: true,
    slidesToShow: elementCount,
    slidesToScroll: 1,
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <ApiSuspense meta={metaData}>
            <Carousel
              {...carouselSettings}
              nextArrow={
                <CustomButton
                  type="primary"
                  icon={<RightOutlined />}
                  backgroundColor="#ffff !important"
                  height="36px"
                />
              }
              prevArrow={
                <CustomButton
                  type="primary"
                  icon={<LeftOutlined />}
                  backgroundColor="#ffff !important"
                  height="36px"
                />
              }
            >
              {data.tagData
                ? data.tagData.map((items) => {
                    return (
                      <>
                        <div key={items.plantName}>
                          <Row key={items.plantName}>
                            <ColPadding
                              span={24}
                              style={{ textAlign: 'center' }}
                              key={items.plantName}
                            >
                              <Wrapper height="390px">
                                {items.graphData.length > 0 ? (
                                  <PieChart
                                    data={items.graphData}
                                    title={items.plantName}
                                    totalValue={items.totalValue}
                                  />
                                ) : (
                                  <>
                                    <CustomText
                                      fontSize="16px"
                                      fontWeight="700"
                                    >
                                      {`${items.plantName}`}
                                    </CustomText>
                                    <br />
                                    <CustomText
                                      fontSize="12px"
                                      color="#00AEEF"
                                      marginTop="3px"
                                      fontWeight="bold"
                                    >
                                      Total Consumption - {items.totalValue} kWh
                                    </CustomText>
                                    <CustomEmpty marginTop="100px" />
                                  </>
                                )}
                              </Wrapper>
                            </ColPadding>
                          </Row>
                        </div>
                      </>
                    );
                  })
                : null}
            </Carousel>
          </ApiSuspense>
        </Col>
      </Row>
    </>
  );
}
TagDetails.protoTypes = {
  data: PropTypes.object.isRequired,
  metaData: PropTypes.string.isRequired,
};
export default TagDetails;
