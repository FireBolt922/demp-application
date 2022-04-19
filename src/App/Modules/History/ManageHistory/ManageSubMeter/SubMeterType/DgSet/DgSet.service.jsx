import http from 'utilities/http';
import { API_ENDPOINTS } from './DgSet.constants';

export function getDGSubMeterHistoryInfo(plantID, meterID, startDate, endDate) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    API_ENDPOINTS.DG_SUB_METER_HISTORY(plantID, meterID),
    queryParam,
  );
}
