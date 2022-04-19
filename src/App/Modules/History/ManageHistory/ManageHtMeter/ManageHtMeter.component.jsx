import React from 'react';

import PropTypes from 'prop-types';

import { ApiSuspense } from 'App/Common/UIComponents';
import HtMeterHistory from 'App/Modules/History/ManageHistory/ManageHtMeter/components/HtMeterHistory';
import HistoryMeterUI from 'App/Modules/History/ManageHistory/HistoryMeterUI/HistoryMeterUI.component';
import { METER_TYPE } from 'App/Modules/History/ManageHistory/ManageHtMeter/ManageHtMeter.constants';
import { dummyMeterList } from './ManageHtMeter.utilities';

function ManageHtMeter({ htMeterData }) {
  // Get Meter List
  const htMeterList = dummyMeterList;
  return (
    <ApiSuspense>
      {htMeterData.startDate && htMeterData.endDate ? (
        <HtMeterHistory
          startDate={htMeterData.startDate}
          endDate={htMeterData.endDate}
          meterId={htMeterData.meterId}
          meterList={htMeterList.htMeterListData}
        />
      ) : (
        <HistoryMeterUI
          meterList={htMeterList.htMeterListData}
          meterType={METER_TYPE}
        />
      )}
    </ApiSuspense>
  );
}
ManageHtMeter.protoTypes = {
  htMeterData: PropTypes.object.isRequired,
};
export default ManageHtMeter;
