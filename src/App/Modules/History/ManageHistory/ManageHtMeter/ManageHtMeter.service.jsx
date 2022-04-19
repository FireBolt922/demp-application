import http from 'utilities/http';
import { API_ENDPOINTS } from './ManageHtMeter.constants';

export function HtMeterListService(plantID) {
  const queryParam = { meter_type: 'ht_meter' };
  return http.get(
    `${API_ENDPOINTS.HT_METER_LIST}/${plantID}/connected-meter-list`,
    queryParam,
  );
}
