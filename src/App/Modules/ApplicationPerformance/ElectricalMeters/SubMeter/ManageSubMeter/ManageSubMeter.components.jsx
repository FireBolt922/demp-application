import React from 'react';
import useRouter from 'react-hooks/router';
import DGSubMeter from 'App/Modules/ApplicationPerformance/ElectricalMeters/SubMeter/SubMeterType/DGSubMeter';
import DefaultSubMeter from '../SubMeterType/DefaultSubMeter';
import SolarSubMeter from '../SubMeterType/SolarSubMeter';
import AirCompressorSubMeter from '../SubMeterType/AirCompressorSubMeter';

function ManageSubMeter() {
  const router = useRouter();
  const { applicationType, meterId } = router.query;
  /**
   * Application Type
   * 1 is for Default Sub Meter
   * 2 is for DG Sub Meter
   * 3 is Solar Sub Meter
   * 5 is Air Compressor Sub Meter
   */

  function handleSubMeterType() {
    switch (applicationType) {
      case '1':
        return <DefaultSubMeter meterId={meterId} />;
      case '2':
        return <DGSubMeter meterId={meterId} />;
      case '3':
        return <SolarSubMeter meterId={meterId} />;
      case '5':
        return <AirCompressorSubMeter meterId={meterId} />;
      default:
        return <DefaultSubMeter meterId={meterId} />;
    }
  }
  return handleSubMeterType();
}

export default ManageSubMeter;
