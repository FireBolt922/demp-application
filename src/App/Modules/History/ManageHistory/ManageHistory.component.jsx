import React from 'react';
import { PAGE } from 'App/Constants/app.constants';
import { Tabs } from 'antd';
import useRouter from 'react-hooks/router';
import { useParams } from 'react-router-dom';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import ManagePlantPerformance from './ManagePlantPerformance';
import ManageHtMeter from './ManageHtMeter';
import ManageSubMeter from './ManageSubMeter';
import './ManageHistory.css';
import ManageGasMeters from './ManageGasMeters';
import ManageSubGasMeter from './ManageSubGasMeter';
import WaterMeterHistory from './WaterMeterHistory';

const { TabPane } = Tabs;

function ManageHistory({ match, history }) {
  const { orgName } = useParams();
  const { plantID } = useParams();
  const router = useRouter();

  const plantPerformanceData = {
    productID: router.query.productID,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  const htMeterData = {
    meterId: router.query.meterId,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  const subMeterData = {
    meterType: router.query.meterType,
    meterId: router.query.meterId,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  const gasMeterData = {
    meterType: router.query.meterType,
    meterId: router.query.meterId,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  const subGasMeterData = {
    meterType: router.query.meterType,
    meterId: router.query.meterId,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  const waterMeter = {
    meterType: router.query.meterType,
    meterId: router.query.meterId,
    startDate: router.query.startDate,
    endDate: router.query.endDate,
  };
  // Get Feature List
  const plantFeatures = customLocalStorage.getItem('plantFeatures', [], 'json');
  let meterCategory;
  plantFeatures.map((items) => {
    if (Number(plantID) === Number(items.plantId)) {
      meterCategory = items.meterCategory;
      return true;
    }
    return false;
  });
  return (
    <Tabs
      centered
      type="card"
      activeKey={match.params.tab}
      onChange={(key) => {
        history.push(`/org/${orgName}/${plantID}${PAGE.HISTORY}/${key}`);
      }}
    >
      <TabPane tab="Plant Performance" key="plant-performance">
        {history.location.pathname ===
        `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.PLANT_PERFORMANCE}` ? (
          <ManagePlantPerformance plantPerformanceData={plantPerformanceData} />
        ) : null}
      </TabPane>
      {meterCategory ? (
        <>
          {meterCategory.electrical_meters.is_enabled === true ? (
            <>
              {meterCategory.electrical_meters.meter_types.ht_meter === true ? (
                <TabPane tab="HT Meter" key="ht-meter">
                  {history.location.pathname ===
                  `/org/${orgName}/${plantID}${PAGE.HISTORY}/ht-meter` ? (
                    <ManageHtMeter htMeterData={htMeterData} />
                  ) : null}
                </TabPane>
              ) : null}
              {meterCategory.electrical_meters.meter_types.sub_meter ===
              true ? (
                <TabPane tab="Sub Meter" key="sub-meter">
                  {history.location.pathname ===
                  `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter` ? (
                    <ManageSubMeter subMeterData={subMeterData} />
                  ) : null}
                </TabPane>
              ) : null}
            </>
          ) : null}
          {meterCategory.gas_flow_meters.is_enabled === true ? (
            <>
              {meterCategory.gas_flow_meters.meter_types.gas_flow_meter ===
              true ? (
                <TabPane tab="Gas Meter" key="gas-meter">
                  {history.location.pathname ===
                    `/org/${orgName}/${plantID}${PAGE.HISTORY}/gas-meter` ||
                  history.location.pathname ===
                    `/org/${orgName}/${plantID}${PAGE.HISTORY}` ? (
                    <ManageGasMeters gasMeterData={gasMeterData} />
                  ) : null}
                </TabPane>
              ) : null}
              {meterCategory.gas_flow_meters.meter_types.sub_gas_flow_meter ===
              true ? (
                <TabPane tab="Sub Gas Meter" key="sub-gas-meter">
                  {history.location.pathname ===
                  `/org/${orgName}/${plantID}${PAGE.HISTORY}${PAGE.SUB_GAS_METER}` ? (
                    <ManageSubGasMeter subGasMeterData={subGasMeterData} />
                  ) : null}
                </TabPane>
              ) : null}
              <TabPane tab="Water Meter" key="water-meter">
                {history.location.pathname ===
                `/org/${orgName}/${plantID}${PAGE.HISTORY}/water-meter` ? (
                  <WaterMeterHistory waterMeterData={waterMeter} />
                ) : null}
              </TabPane>
            </>
          ) : null}
        </>
      ) : null}
    </Tabs>
  );
}

export default ManageHistory;
