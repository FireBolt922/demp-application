import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import SectionHeader from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/HtMeterTypes/Transformer/components/SectionHeader';
import { DividerPadding } from '../Transformer.styled';

function TransformerLossSavingPotential({ transformerData }) {
  const savingPotentialColumn = [
    {
      title: 'Load Condition',
      dataIndex: 'loadCondition',
      key: 'loadCondition',
    },
    {
      title: 'KVA Loading',
      dataIndex: 'kvaLoading',
      key: 'kvaLoading',
      align: 'center',
    },
    {
      title: 'Percentage Loading',
      dataIndex: 'percentageLoading',
      key: 'percentageLoading',
      render: (record) => `${record}`,
      align: 'center',
    },
    {
      title: 'Fixed Losses, kWh',
      dataIndex: 'fixedLosses',
      key: 'fixedLosses',
      render: (record) => `${record}`,
      align: 'center',
    },
    {
      title: 'Percentage Loss',
      dataIndex: 'percentageLoss',
      key: 'percentageLoss',
      render: (record) => `${record}  %`,
      align: 'center',
    },
  ];
  return (
    <>
      <SectionHeader
        name={"Yesterday's Transformer losses and Saving Potential"}
      />
      <DividerPadding />
      <Table
        dataSource={transformerData}
        columns={savingPotentialColumn}
        pagination={false}
        bordered
      />
    </>
  );
}
TransformerLossSavingPotential.protoTypes = {
  transformerData: PropTypes.object.isRequired,
};
export default TransformerLossSavingPotential;
