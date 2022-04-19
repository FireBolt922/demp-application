import React, { useState } from 'react';
import { Row, Col, Table, Typography, Input } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { stringifyUrlParam } from 'utilities/url';
import ToolTip from 'App/Common/UIComponents/ToolTip/ToolTip';
import { useParams } from 'react-router';
import {
  ColDivider,
  DividerPadding,
  StatusCircle,
  MeterName,
} from './ManageWaterFlowMeter.styled';
import { response } from './ManageWaterFlowMeter.utilities';

const { Title } = Typography;
function ManageWaterFlowMeter() {
  const plantID = useParams();
  const orgName = 'enerlly';

  const [value] = useState(null);

  const filterMeterByInput = (
    <Input placeholder="Search Meter Name" value={value} />
  );
  const dataSource = response;
  function onClickHandle(record) {
    /**
     * Application Type
     * If applicationCategory is water_meter then main water meter data will be loaded
     * if applicationCategory is sub_water_meter then sub water meter will be loaded
     */
    switch (record.applicationCategory) {
      case 'water_meter':
        return `/org/${orgName}/1/water-meter?${stringifyUrlParam({
          meterId: 1,
          applicationType: 7,
        })}`;

      case 'sub_water_meter':
        return `/org/${orgName}/${plantID}/sub-meter?${stringifyUrlParam({
          meterId: record.id,
          applicationType: record.applicationType,
        })}`;

      default:
        break;
    }
    return null;
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

  const columns = [
    {
      title: filterMeterByInput,
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
    {
      title: 'Power Factor',
      dataIndex: 'powerFactor',
      key: 'powerFactor',
      align: 'center',
    },
    {
      title: 'Current (Amps)',
      dataIndex: 'currentTotal',
      key: 'currentTotal',
      align: 'center',
    },
  ];
  return (
    <ApiSuspense>
      <Row>
        <ColDivider span={24}>
          <Wrapper>
            <Row>
              <Col span={24}>
                <Title level={5}>
                  Water Energy Sources
                  <ToolTip titleOfToolTip="Water flow meter details" />
                </Title>
              </Col>
            </Row>
            <DividerPadding />
            <Table
              columns={columns}
              expandIconAsCell
              expandRowByClick
              dataSource={dataSource}
              pagination={false}
              bordered
            />
          </Wrapper>
        </ColDivider>
      </Row>
    </ApiSuspense>
  );
}

export default ManageWaterFlowMeter;
