import http from 'utilities/http';
import { API_ENDPOINTS } from './AirCompressor.constants';

export function getAirCompressorSubMeterHistoryInfo(
  plantID,
  meterID,
  startDate,
  endDate,
) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    API_ENDPOINTS.AIR_COMPRESSOR_SUB_METER_HISTORY(plantID, meterID),
    queryParam,
  );
}
