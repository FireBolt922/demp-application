import React, { useState, useEffect } from 'react';
import { Input, Table, Row, Col, Typography } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { stringifyUrlParam } from 'utilities/url';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { useParams } from 'react-router-dom';
import ToolTip from 'App/Common/UIComponents/ToolTip/ToolTip';
import DisplayTags from 'App/Common/PlugAndPlayComponents/Tags/DisplayTags';
import AddTag from 'App/Common/PlugAndPlayComponents/Tags/AddTags';
import FilterTag from 'App/Common/PlugAndPlayComponents/Tags/FilterTag/FilterTag';
import FilterTagDropdown from 'App/Common/PlugAndPlayComponents/Tags/FilterTagDropdown/FilterTagDropdown';
import {
  dummyMeterListDataElectrical,
  dummyTagResponse,
} from './ElectricalMeters.utilities';
import {
  AUXILIARY_TOOLTIP,
  PRIMARY_ENERGY_TOOLTIP,
} from './ElectricalMeters.constants';
import {
  StatusCircle,
  MeterName,
  CustomCol,
  DividerPadding,
} from './ElectricalMeters.styled';

const { Title } = Typography;

function ElectricalMeter() {
  const { plantID, orgName } = useParams();
  const [allMeterList, setAllMeterList] = useState(null);
  const [auxiliaryDataSource, setAuxiliaryDataSource] = useState(null);
  const [auxiliaryValue, setAuxiliaryValue] = useState(null);
  const [selectedTag, setSelectedTag] = useState([]);
  const tagList = dummyTagResponse;
  const [dataSource, setDataSource] = useState(null);
  function onClickHandle(record) {
    /**
     * Application Type
     * If applicationCategory is htMeter then ht meter data will be loaded
     * if applicationCategory is subMeter then sub meter will be loaded
     */
    switch (record.applicationCategory) {
      case 'ht_meter':
        return `/org/${orgName}/${plantID}/ht-meter?${stringifyUrlParam({
          meterId: record.id,
          applicationType: record.applicationType,
        })}`;

      case 'sub_meter':
        return `/org/${orgName}/${plantID}/sub-meter?${stringifyUrlParam({
          meterId: record.id,
          applicationType: record.applicationType,
        })}`;

      default:
        break;
    }
    return null;
  }
  function renderElectricMetersList(meterName, meterDetails) {
    return (
      <Row>
        <Col span={24}>
          <StatusCircle
            color={meterDetails.meterStatus === 'ON' ? 'green' : 'red'}
          />
          <MeterName to={() => onClickHandle(meterDetails)}>
            {meterName}
          </MeterName>
        </Col>
        <Col span={24}>
          <DisplayTags
            tagsData={meterDetails}
            plantID={plantID}
            setMeterListDataSource={setDataSource}
            setAuxiliaryListDataSource={setAuxiliaryDataSource}
            meterList={dummyMeterListDataElectrical.electricalMeterList}
            auxiliaryMeterList={auxiliaryDataSource}
            selectedFilterTag={setSelectedTag}
            selectedTagList={selectedTag}
          />
        </Col>
      </Row>
    );
  }
  function renderName(meterName, meterDetails) {
    return (
      <>
        <StatusCircle
          color={meterDetails.meterStatus === 'ON' ? 'green' : 'red'}
        />
        <MeterName to={() => onClickHandle(meterDetails)}>
          {meterName}
        </MeterName>
      </>
    );
  }

  const [value, setValue] = useState(null);

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
        percentageLoading: item.percentageLoading,
        powerFactor: item.powerFactor,
        currentTotal: item.currentTotal,
        applicationCategory: item.applicationCategory,
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
          percentageLoading: items.percentageLoading,
          powerFactor: items.powerFactor,
          currentTotal: items.currentTotal,
          applicationCategory: items.applicationCategory,
        };
        tempMeterList.push(dataSetChildren);
        return true;
      });
      return true;
    });
    setAllMeterList(tempMeterList);
  }
  useEffect(() => {
    setDataSource(dummyMeterListDataElectrical.electricalMeterList);
    setAuxiliaryDataSource(dummyMeterListDataElectrical.auxiliaryMeterList);
  }, [setDataSource, setAuxiliaryDataSource]);

  function filterMeters(meterData) {
    const currentInputValue = meterData.target.value;
    setValue(currentInputValue);

    if (currentInputValue) {
      updateMeterList(dummyMeterListDataElectrical.electricalMeterList);
      if (allMeterList) {
        const meterList = allMeterList.filter((entry) =>
          entry.name.toLowerCase().includes(currentInputValue.toLowerCase()),
        );
        setDataSource(meterList);
      }
    } else {
      setDataSource(dummyMeterListDataElectrical.electricalMeterList);
    }
  }
  const filterMeterByInput = (
    <Input
      placeholder="Search Meter Name"
      value={value}
      onChange={(meterData) => filterMeters(meterData)}
    />
  );
  /**
   * This column is used in electrical meter list
   * */
  const columns = [
    {
      title: filterMeterByInput,
      dataIndex: 'name',
      key: 'name',
      render: (meterName, record) =>
        renderElectricMetersList(meterName, record),
    },
    {
      title: 'Meter Values',
      dataIndex: 'percentageLoading',
      key: 'percentageLoading',
      align: 'center',
    },
  ];
  /**
   * This function is used to filter Auxiliary Meter
   * */
  const FilterByNameInput = (
    <Input
      placeholder="Search Meter Name"
      value={auxiliaryValue}
      onChange={(event) => {
        const currValue = event.target.value;
        setAuxiliaryValue(currValue);
        const filteredData = dummyMeterListDataElectrical.auxiliaryMeterList.filter(
          (entry) => entry.name.toLowerCase().includes(currValue.toLowerCase()),
        );
        setAuxiliaryDataSource(filteredData);
      }}
    />
  );
  /**
   * This column is used in Auxiliary meter list table
   * */
  const auxiliaryColumns = [
    {
      title: FilterByNameInput,
      dataIndex: 'name',
      key: 'name',
      render: (meterName, record) => renderName(meterName, record),
    },
    {
      title: 'Percentage Loading',
      dataIndex: 'percentageLoading',
      key: 'percentageLoading',
      align: 'center',
    },
  ];
  return (
    <ApiSuspense>
      <Wrapper>
        <Row>
          <Col span={24}>
            <Title level={5}>
              Primary Energy Sources
              <ToolTip titleOfToolTip={PRIMARY_ENERGY_TOOLTIP} />
            </Title>
          </Col>

          <CustomCol align="right" span={12}>
            {dummyMeterListDataElectrical.electricalMeterList ? (
              <FilterTagDropdown
                tagList={tagList}
                meterList={dummyMeterListDataElectrical.electricalMeterList}
                auxiliaryList={dummyMeterListDataElectrical.auxiliaryMeterList}
                selectedFilterTag={setSelectedTag}
                setMeterListDataSource={setDataSource}
                setAuxiliaryListDataSource={setAuxiliaryDataSource}
                selectedTagList={selectedTag}
              />
            ) : null}
          </CustomCol>
        </Row>

        <DividerPadding />
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          bordered
        />
      </Wrapper>
    </ApiSuspense>
  );
}
export default ElectricalMeter;
