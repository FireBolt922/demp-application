import React from 'react';
import { Row, Col } from 'antd';
import TagDetails from './components/TagDetails';
import PlantYesterdaysGraph from './components/PlantYesterdaysGraph';
import EnergyResources from './components/EnergyResources';
import PlantTotalCost from './components/PlantTotalCost';
import PlantSummary from './components/PlantSummary';
import Kpi from './components/Kpi';
import {
  dummyPlantSummaryResponse,
  dummyHomePageGraph,
} from './HomePage.utilities';
import { WrapperPadding } from './HomePage.styled';
import MeterBlock from 'App/Common/UIComponents/MeterBlock';
import data from '../Accounts/ChangePassword/changePassword.utilities';
const homePageGraph = dummyHomePageGraph;
function HomePage() {
  const data = [
    {
      key: 1,
      title: 'Data Set 1',
      params: [
        {
          key: 1,
          name: 'Data 1',
          value: `200 `,
        },
        {
          key: 2,
          name: 'Data 2',
          value: `200`,
        },
      ],
    },
    {
      key: 1,
      title: 'Data Set 2',
      params: [
        {
          key: 1,
          name: 'Data 3',
          value: `200 kWh`,
        },
        {
          key: 2,
          name: 'Data 4',
          value: `200`,
        },
      ],
    },
  ];
  const data2 = [
    {
      key: 1,
      title: 'Data Set 3',
      params: [
        {
          key: 1,
          name: 'Data 5',
          value: `200 `,
        },
        {
          key: 2,
          name: 'Data 6',
          value: `200`,
        },
      ],
    },
    {
      key: 1,
      title: 'Data Set 4',
      params: [
        {
          key: 1,
          name: 'Data 7',
          value: `200 kWh`,
        },
        {
          key: 2,
          name: 'Data 8',
          value: `200`,
        },
      ],
    },
  ];
  const data3 = [
    {
      key: 1,
      title: 'Data Set 5',
      params: [
        {
          key: 1,
          name: 'Data 7',
          value: `200 `,
        },
        {
          key: 2,
          name: 'Data 8',
          value: `200`,
        },
      ],
    },
    {
      key: 1,
      title: 'Data Set 6',
      params: [
        {
          key: 1,
          name: 'Data 9',
          value: `200 kWh`,
        },
        {
          key: 2,
          name: 'Data 10',
          value: `200`,
        },
      ],
    },
  ];

  return (
    <>
      <WrapperPadding>
        <MeterBlock parameter={data} />
        <MeterBlock parameter={data2} />
        <MeterBlock parameter={data3} />
      </WrapperPadding>
    </>
  );
}
export default HomePage;
