import http from 'utilities/http';
import { API_ENDPOINTS } from './Solar.constants';

export function getSolarSubMeterHistoryInfo(
  plantID,
  meterID,
  startDate,
  endDate,
) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    API_ENDPOINTS.SOLAR_SUB_METER_HISTORY(plantID, meterID),
    queryParam,
  );
}
