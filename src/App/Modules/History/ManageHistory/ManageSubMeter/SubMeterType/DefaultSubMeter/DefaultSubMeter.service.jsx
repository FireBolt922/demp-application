import http from 'utilities/http';
import { API_ENDPOINTS } from './DefaultSubMeter.constants';

export function getSubMeterHistoryInfo(plantID, meterID, startDate, endDate) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    API_ENDPOINTS.SUB_METER_HISTORY(plantID, meterID),
    queryParam,
  );
}
