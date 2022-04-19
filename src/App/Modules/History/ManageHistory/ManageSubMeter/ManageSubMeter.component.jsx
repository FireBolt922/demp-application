import React from 'react';
import PropTypes from 'prop-types';
import DefaultSubMeter from 'App/Modules/History/ManageHistory/ManageSubMeter/SubMeterType/DefaultSubMeter';
import SolarSubMeter from 'App/Modules/History/ManageHistory/ManageSubMeter/SubMeterType/Solar';
import DgSubMeter from 'App/Modules/History/ManageHistory/ManageSubMeter/SubMeterType/DgSet';
import AirCompressorSubMeter from 'App/Modules/History/ManageHistory/ManageSubMeter/SubMeterType/AirCompressor';
import HistoryMeterUI from 'App/Modules/History/ManageHistory/HistoryMeterUI/HistoryMeterUI.component';
import { ApiSuspense } from 'App/Common/UIComponents';
import { METER_TYPE } from 'App/Modules/History/ManageHistory/ManageSubMeter/ManageSubMeter.constants';
import { dummySubMeterHistory } from './ManageSubMeter.utilities';

function ManageSubMeter({ subMeterData }) {
  // Get Meter List
  const subMeterList = dummySubMeterHistory;

  /**
   * Meter Type = 1 (Default Sub Meter)
   * Meter Type = 2 (DG Set)
   * Meter Type = 3 (Solar)
   */

  function handleSubMeterType(applicationMeterType) {
    switch (applicationMeterType) {
      case '1':
        return (
          <DefaultSubMeter
            startDate={subMeterData.startDate}
            endDate={subMeterData.endDate}
            meterId={subMeterData.meterId}
            meterType={subMeterData.meterType}
            meterList={subMeterList.subMeterListData}
          />
        );
      case '2':
        return (
          <DgSubMeter
            startDate={subMeterData.startDate}
            endDate={subMeterData.endDate}
            meterId={subMeterData.meterId}
            meterType={subMeterData.meterType}
            meterList={subMeterList.subMeterListData}
          />
        );
      case '3':
        return (
          <SolarSubMeter
            startDate={subMeterData.startDate}
            endDate={subMeterData.endDate}
            meterId={subMeterData.meterId}
            meterType={subMeterData.meterType}
            meterList={subMeterList.subMeterListData}
          />
        );
      case '5':
        return (
          <AirCompressorSubMeter
            startDate={subMeterData.startDate}
            endDate={subMeterData.endDate}
            meterId={subMeterData.meterId}
            meterType={subMeterData.meterType}
            meterList={subMeterList.subMeterListData}
          />
        );
      default:
        return (
          <HistoryMeterUI
            meterList={subMeterList.subMeterListData}
            meterType={METER_TYPE}
          />
        );
    }
  }

  return (
    <ApiSuspense>{handleSubMeterType(subMeterData.meterType)}</ApiSuspense>
  );
}

ManageSubMeter.protoTypes = {
  subMeterData: PropTypes.object.isRequired,
};
export default ManageSubMeter;
