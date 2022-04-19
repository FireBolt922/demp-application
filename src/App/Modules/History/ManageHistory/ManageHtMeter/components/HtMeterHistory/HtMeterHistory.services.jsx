import http from 'utilities/http';
import { API_ENDPOINTS } from './HtMeterHistory.constants';

export function getHtMeterHistoryInfo(plantID, meterID, startDate, endDate) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(API_ENDPOINTS.HT_METER_HISTORY(plantID, meterID), queryParam);
}
