import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import DefaultSubGasMeter from 'App/Modules/History/ManageHistory/ManageSubGasMeter/SubGasMeterTypes/DefaultSubGasMeter';
import HistoryMeterUI from 'App/Modules/History/ManageHistory/HistoryMeterUI/HistoryMeterUI.component';
import { METER_TYPE } from 'App/Modules/History/ManageHistory/ManageSubGasMeter/ManageSubGasMeter.constants';
import * as network from 'react-hooks/network/network';
import { ApiSuspense } from 'App/Common/UIComponents';
import { subGasMeterListService } from './ManageSubGasMeter.service';
import { subGasMeterListTransformer } from './ManageSubGasMeter.utilities';

function ManageSubGasMeter({ subGasMeterData }) {
  const { plantID } = useParams();
  // Get Gas Meter List
  const {
    response: subGasMeterList,
    network: metaSubGasMeterList,
  } = network.useNetwork(subGasMeterListService, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: subGasMeterListTransformer,
  });

  function handleSubMeterType(applicationMeterType) {
    switch (applicationMeterType) {
      case '1':
        return (
          <DefaultSubGasMeter
            startDate={subGasMeterData.startDate}
            endDate={subGasMeterData.endDate}
            meterId={subGasMeterData.meterId}
            meterType={subGasMeterData.meterType}
            meterList={subGasMeterList.subGasMeterListData}
          />
        );
      default:
        return (
          <HistoryMeterUI
            meterList={subGasMeterList.subGasMeterListData}
            meterType={METER_TYPE}
          />
        );
    }
  }

  return (
    <ApiSuspense meta={metaSubGasMeterList}>
      {handleSubMeterType(subGasMeterData.meterType)}
    </ApiSuspense>
  );
}
ManageSubGasMeter.protoTypes = {
  subGasMeterData: PropTypes.object.isRequired,
};
export default ManageSubGasMeter;
