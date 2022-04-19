import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { Typography } from 'antd';
import { PARAMETER_LIST_FOR_ENERGY_CONSUMPTION } from '../HomePage.constants';
import {
  CustomTh,
  CustomTd,
  TopScrollDiv,
  MiddleScrollDiv,
  WrapperPadding,
} from '../HomePage.styled';

function PlantSummary({ plantData, metaData, numberOfPlants }) {
  const { Title } = Typography;
  function kpiTitle({ label, data }) {
    return (
      <tr key={label}>
        <CustomTh
          border="2px solid #E5E5E5"
          width="230px"
          padding="10px"
          fontSize="14px"
          color="#454545"
        >
          {label}
        </CustomTh>
        {data
          ? data.map((item) => {
              return (
                <CustomTh
                  key={item.plantName}
                  border="2px solid #E5E5E5"
                  width="200px"
                  align="center"
                  padding="10px"
                  fontSize="14px"
                  color="#454545"
                >
                  {item.plantName}
                </CustomTh>
              );
            })
          : null}
      </tr>
    );
  }
  function kpiBody({ label, data, name }) {
    return (
      <tr key={label}>
        <CustomTh
          border="2px solid #E5E5E5"
          width="200px"
          padding="10px"
          fontWeight="normal"
          fontSize="14px"
        >
          {name}
        </CustomTh>
        {data
          ? data.map((item) => {
              return (
                <CustomTd
                  key={item[label]}
                  border="2px solid #E5E5E5"
                  width="200px"
                  align="center"
                  padding="10px"
                  fontWeight="normal"
                  fontSize="14px"
                >
                  {item[label]}
                </CustomTd>
              );
            })
          : null}
      </tr>
    );
  }
  return (
    <>
      {plantData ? (
        <WrapperPadding style={{ marginTop: '18px' }} span={24}>
          {numberOfPlants > 2 ? (
            <TopScrollDiv overflow="scroll" width="100%" overflowY="hidden">
              <MiddleScrollDiv
                minWidth={numberOfPlants > 2 ? '124%' : '100%'}
                width="100%"
                marginBottom="5px"
              >
                <Wrapper>
                  <ApiSuspense>
                    <Title level={5}>Plant Summary</Title>
                    <table style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <CustomTh
                            colSpan={numberOfPlants + 1}
                            height="55px"
                            background="rgba(25, 203, 128, 0.44)"
                            borderRadius="5px 5px 0px 0px"
                            padding="0px 10px 0px"
                          >
                            Summary of Plant Level Energy Performance
                          </CustomTh>
                        </tr>

                        {kpiTitle({
                          label: `Energy Consumption Summary`,
                          data: plantData.tableData,
                        })}
                      </thead>
                      <tbody>
                        {PARAMETER_LIST_FOR_ENERGY_CONSUMPTION.map((items) => {
                          return kpiBody({
                            key: items.name,
                            name: items.name,
                            label: items.label,
                            data: plantData.tableData,
                          });
                        })}
                      </tbody>
                    </table>
                  </ApiSuspense>
                </Wrapper>
              </MiddleScrollDiv>
            </TopScrollDiv>
          ) : (
            <Wrapper style={{ height: '345px' }}>
              <Title level={5}>Plant Summary</Title>

              <ApiSuspense meta={metaData}>
                <table style={{ width: '100%' }}>
                  {kpiTitle({
                    label: `Energy Consumption Summary`,
                    data: plantData.tableData,
                  })}

                  <tbody>
                    {PARAMETER_LIST_FOR_ENERGY_CONSUMPTION.map((items) => {
                      return kpiBody({
                        key: items.name,
                        name: items.name,
                        label: items.label,
                        data: plantData.tableData,
                      });
                    })}
                  </tbody>
                </table>
              </ApiSuspense>
            </Wrapper>
          )}
        </WrapperPadding>
      ) : null}
    </>
  );
}
PlantSummary.propTypes = {
  plantData: PropTypes.array.isRequired,
  metaData: PropTypes.object.isRequired,
  numberOfPlants: PropTypes.number.isRequired,
};
export default PlantSummary;
