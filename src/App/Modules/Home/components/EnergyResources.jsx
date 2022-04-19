import React from 'react';
import PropTypes from 'prop-types';
import { Col, Empty } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import BarChart from './BarChart';
import {
  TopScrollDiv,
  MiddleScrollDiv,
  CustomRow,
  CustomText,
  WrapperPadding,
} from '../HomePage.styled';

function EnergyResources({ graphData, metaData }) {
  return (
    <>
      {graphData ? (
        <Col span={24}>
          {graphData.length > 2 ? (
            <TopScrollDiv overflow="scroll" width="100%" overflowY="hidden">
              <MiddleScrollDiv minWidth="100%" width="100%" height="190px">
                <CustomRow display="flex" flexWrap="nowrap">
                  {graphData
                    ? graphData.map((item) => {
                        return (
                          <>
                            <WrapperPadding span={12} align="center">
                              <Wrapper>
                                <ApiSuspense meta={metaData}>
                                  {item.graphData.length > 0 ? (
                                    <BarChart
                                      data={item.graphData}
                                      title={item.plantName}
                                    />
                                  ) : (
                                    <>
                                      <CustomText
                                        fontSize="15px"
                                        fontWeight="bold"
                                      >
                                        {item.plantName}
                                      </CustomText>
                                      <br />
                                      <CustomText
                                        fontSize="12px"
                                        fontWeight="bold"
                                        color="#70727b"
                                      >
                                        Energy Resources, toe
                                      </CustomText>
                                      <Empty imageStyle={{ height: '74px' }} />
                                    </>
                                  )}
                                </ApiSuspense>
                              </Wrapper>
                            </WrapperPadding>
                          </>
                        );
                      })
                    : null}
                </CustomRow>
              </MiddleScrollDiv>
            </TopScrollDiv>
          ) : (
            <CustomRow display="flex" flexWrap="nowrap">
              {graphData
                ? graphData.map((item) => {
                    return (
                      <>
                        <WrapperPadding
                          span={graphData.length >= 2 ? 12 : 24}
                          align="center"
                        >
                          <Wrapper>
                            <ApiSuspense meta={metaData}>
                              {item.graphData.length > 0 ? (
                                <BarChart
                                  data={item.graphData}
                                  title={item.plantName}
                                />
                              ) : (
                                <>
                                  <CustomText fontSize="15px" fontWeight="bold">
                                    {item.plantName}
                                  </CustomText>
                                  <br />
                                  <CustomText
                                    fontSize="12px"
                                    fontWeight="bold"
                                    color="#70727b"
                                  >
                                    Energy Resources, toe
                                  </CustomText>
                                  <Empty imageStyle={{ height: '74px' }} />
                                </>
                              )}
                            </ApiSuspense>
                          </Wrapper>
                        </WrapperPadding>
                      </>
                    );
                  })
                : null}
            </CustomRow>
          )}
        </Col>
      ) : null}
    </>
  );
}
EnergyResources.propTypes = {
  graphData: PropTypes.array.isRequired,
  metaData: PropTypes.object.isRequired,
};
export default EnergyResources;
