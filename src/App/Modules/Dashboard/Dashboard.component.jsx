import React from 'react';
import { Col, Row, Table, Typography } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import CustomTable from 'App/Common/UIComponents/CustomTable';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import CustomCollapse from 'App/Common/UIComponents/CustomCollapse/CustomCollapse';
import { ColPadding, DividerPadding, TextCenterCol } from './Dashboard.styled';
import Graph from './components/Graph';
import { dummyDashboardPlant1Data } from './Dashboard.utilities';

const { Title } = Typography;
function Dashboard() {
  const dashboardData = dummyDashboardPlant1Data;
  const COLUMNS = [
    {
      title: <strong>Parameters</strong>,
      dataIndex: 'params',
      key: 'params',
    },
    {
      title: <strong>Yesterday&apos;s Data</strong>,
      dataIndex: 'yesterdayData',
      key: 'yesterdayData',
      align: 'center',
    },
    {
      title: <strong>Today&apos;s Data</strong>,
      dataIndex: 'todayData',
      key: 'todayData',
      align: 'center',
    },
  ];
  return (
    <ApiSuspense>
      <div>This is under development Phase and will be uopdated soon</div>
    </ApiSuspense>
  );
}

export default Dashboard;
