import React, { useState, useEffect } from 'react';
import { PAGE } from 'App/Constants/app.constants';
import { Input, Table, Col } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { useParams } from 'react-router-dom';
import { stringifyUrlParam } from 'utilities/url';
import { StatusCircle, MeterName } from './GasMeter.styled';
import { dummyGasMeterListData } from './GasMeter.utilities';

function GasMeters() {
  const { plantID, orgName } = useParams();
  const [allMeterList, setAllMeterList] = useState(null);
  function onClickHandle(record) {
    switch (record.applicationCategory) {
      case 'gas_flow_meter':
        return `/org/${orgName}/${plantID}/gas-meter?${stringifyUrlParam({
          meterId: record.id,
          applicationType: record.applicationType,
        })}`;

      case 'sub_gas_flow_meter':
        return `/org/${orgName}/${plantID}${
          PAGE.SUB_GAS_METER
        }?${stringifyUrlParam({
          meterId: record.id,
          applicationType: record.applicationType,
        })}`;
      default:
        break;
    }
    return null;
  }
  function renderName(meterName, record) {
    return (
      <>
        <StatusCircle color={record.meterStatus === 'ON' ? 'green' : 'red'} />
        <MeterName to={() => onClickHandle(record)}>{meterName}</MeterName>
      </>
    );
  }
  const [dataSource, setDataSource] = useState(null);
  const [value, setValue] = useState(null);
  useEffect(() => {
    setDataSource(dummyGasMeterListData);
  }, [setDataSource]);

  function updateMeterList(meterList) {
    const tempMeterList = [];
    meterList.map((item) => {
      const dataSet = {
        key: item.name,
        id: item.id,
        name: item.name,
        details: item.details,
        applicationType: item.applicationType,
        meterStatus: item.meterStatus,
        volumetricFlow: item.volumetricFlow,
        massFlow: item.massFlow,
        temperature: item.temperature,
      };
      tempMeterList.push(dataSet);
      item.children.map((items) => {
        const dataSetChildren = {
          key: items.name,
          id: items.id,
          name: items.name,
          details: items.details,
          applicationType: items.applicationType,
          meterStatus: items.meterStatus,
          volumetricFlow: items.volumetricFlow,
          massFlow: items.massFlow,
          temperature: items.temperature,
        };
        tempMeterList.push(dataSetChildren);
        return true;
      });
      return true;
    });
    setAllMeterList(tempMeterList);
  }

  function filterMeters(meterData) {
    const currentInputValue = meterData.target.value;
    setValue(currentInputValue);

    if (currentInputValue) {
      updateMeterList(dummyGasMeterListData);
      if (allMeterList) {
        const meterList = allMeterList.filter((entry) =>
          entry.name.toLowerCase().includes(currentInputValue.toLowerCase()),
        );
        setDataSource(meterList);
      }
    } else {
      setDataSource(dummyGasMeterListData);
    }
  }
  const filterMeterByInput = (
    <Input
      placeholder="Search Meter Name"
      value={value}
      onChange={(meterData) => filterMeters(meterData)}
    />
  );
  function temperatureUnit(meterData) {
    if (meterData.unit === 'celsius') {
      return <Col>{meterData.value} &deg;C</Col>;
    }
    if (meterData.unit === 'fahrenheit') {
      return <Col>{meterData.value} F</Col>;
    }
    if (meterData.unit === 'kelvin') {
      return <Col>{meterData.value} K</Col>;
    }
    return false;
  }
  const columns = [
    {
      title: filterMeterByInput,
      dataIndex: 'name',
      key: 'name',
      render: (meterName, record) => renderName(meterName, record),
    },
    {
      title: 'Volumetric Flow',
      dataIndex: 'volumetricFlow',
      key: 'volumetricFlow',
      align: 'center',
    },
    {
      title: 'Mass Flow',
      dataIndex: 'massFlow',
      key: 'massFlow',
      align: 'center',
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature',
      align: 'center',
      render: (meterData) => temperatureUnit(meterData),
    },
  ];

  return (
    <ApiSuspense>
      <Wrapper>
        <Table
          columns={columns}
          expandIconAsCell
          expandRowByClick
          dataSource={dataSource}
          pagination={false}
          bordered
        />
      </Wrapper>
    </ApiSuspense>
  );
}
export default GasMeters;
