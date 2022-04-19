import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Empty, Descriptions } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import {
  SelectDropDown,
  CustomTitle,
  WrapperPadding,
} from '../HomePage.styled';

const { Title } = Typography;
const { Option } = SelectDropDown;

function Kpi({ numberOfPlants, plantList }) {
  const [showKpiPopUp, setShowKpiPopUp] = useState(false);
  const [kpiData, setKpiData] = useState([]);
  function onChange(value) {
    setShowKpiPopUp(true);
    const filteredData = plantList.kpi.filter((item) => item.plantId === value);
    if (filteredData.length > 0) {
      const temp = [
        {
          name: 'Specific Energy Consumption (kWh/tonnes)',
          value: filteredData[0].specificEnergyConsumption,
        },
        {
          name: 'Specific Energy Cost (₹/tonnes)',
          value: filteredData[0].specificEnergyCost,
        },
        {
          name: 'Specific Energy Emission (tCO2/tonnes)',
          value: filteredData[0].specificEnergyEmission,
        },
      ];
      setKpiData(temp);
    } else {
      setKpiData([]);
    }
  }
  return (
    <>
      {plantList ? (
        <WrapperPadding span={24}>
          {numberOfPlants > 1 ? (
            <Wrapper height={numberOfPlants === 2 ? '343px' : '358px'}>
              <ApiSuspense>
                <CustomTitle fontSize="16px" fontWeight="bold" level={5}>
                  Key Performance Indicator
                </CustomTitle>
                <SelectDropDown
                  onChange={onChange}
                  placeholder="Select Plant"
                  id="select-plant-dropdown"
                >
                  {plantList.tableData
                    ? plantList.tableData.map((item) => {
                        return (
                          <Option key={item.plantId} value={item.plantId}>
                            {item.plantName}
                          </Option>
                        );
                      })
                    : null}
                </SelectDropDown>
                {showKpiPopUp ? (
                  <>
                    {kpiData.length >= 1 ? (
                      <>
                        {kpiData.map((item) => {
                          return (
                            <>
                              {plantList.tableData.length > 1 ? (
                                <Descriptions bordered key={item.name}>
                                  <Descriptions.Item
                                    label={item.name}
                                    style={{
                                      width: '230px',
                                      height: '80px',
                                      backgroundColor: '#fff',
                                    }}
                                  >
                                    {item.value}
                                  </Descriptions.Item>
                                </Descriptions>
                              ) : (
                                <Descriptions bordered key={item.name}>
                                  <Descriptions.Item
                                    label={item.name}
                                    style={{
                                      width: '230px',
                                      height: '80px',
                                      backgroundColor: '#fff',
                                    }}
                                  >
                                    {item.value}
                                  </Descriptions.Item>
                                </Descriptions>
                              )}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Empty />
                    )}
                  </>
                ) : null}
              </ApiSuspense>
            </Wrapper>
          ) : (
            <Wrapper height={numberOfPlants > 1 ? '360px' : '343px'}>
              <ApiSuspense>
                <Title level={5}>Key Performance Indicator</Title>
                <SelectDropDown
                  onChange={onChange}
                  placeholder="Select Plant"
                  id="select-plant-dropdown"
                >
                  {plantList.tableData
                    ? plantList.tableData.map((item) => {
                        return (
                          <Option key={item.plantId} value={item.plantId}>
                            {item.plantName}
                          </Option>
                        );
                      })
                    : null}
                </SelectDropDown>
                {showKpiPopUp ? (
                  <>
                    {kpiData.length >= 1 ? (
                      <>
                        {kpiData.map((item) => {
                          return (
                            <>
                              {plantList.tableData.length > 1 ? (
                                <Descriptions bordered key={item.name}>
                                  <Descriptions.Item
                                    label={item.name}
                                    style={{
                                      width: '230px',
                                      height: '85px',
                                      backgroundColor: '#fff',
                                    }}
                                  >
                                    {item.value}
                                  </Descriptions.Item>
                                </Descriptions>
                              ) : (
                                <Descriptions bordered key={item.name}>
                                  <Descriptions.Item
                                    label={item.name}
                                    style={{
                                      width: '230px',
                                      height: '80px',
                                      backgroundColor: '#fff',
                                    }}
                                  >
                                    {item.value}
                                  </Descriptions.Item>
                                </Descriptions>
                              )}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <Empty />
                    )}
                  </>
                ) : null}
              </ApiSuspense>
            </Wrapper>
          )}
        </WrapperPadding>
      ) : null}
    </>
  );
}

Kpi.propTypes = {
  numberOfPlants: PropTypes.number.isRequired,
  plantList: PropTypes.array.isRequired,
};

export default Kpi;
