import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import HistoryMeterUI from 'App/Modules/History/ManageHistory/HistoryMeterUI/HistoryMeterUI.component';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import * as network from 'react-hooks/network/network';

import GasMeterHistory from './components/GasMeterHistory';
import { gasMeterListService } from './ManageGasMeter.service';
import { gasMeterListTransformer } from './ManageGasMeter.utilities';
import { METER_TYPE } from './ManageGasMeter.constants';

function ManageGasMeter({ gasMeterData }) {
  const { plantID } = useParams();

  // Get Meter List
  const {
    response: gasMeterList,
    network: metaGasMeterList,
  } = network.useNetwork(gasMeterListService, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: gasMeterListTransformer,
  });

  return (
    <ApiSuspense meta={metaGasMeterList}>
      {gasMeterData.startDate && gasMeterData.endDate ? (
        <GasMeterHistory
          startDate={gasMeterData.startDate}
          endDate={gasMeterData.endDate}
          meterId={gasMeterData.meterId}
          meterList={gasMeterList.gasMeterListData}
        />
      ) : (
        <HistoryMeterUI
          meterList={gasMeterList.gasMeterListData}
          meterType={METER_TYPE}
        />
      )}
    </ApiSuspense>
  );
}
ManageGasMeter.protoTypes = {
  gasMeterData: PropTypes.object.isRequired,
};
export default ManageGasMeter;
