import http from 'utilities/http';
import { API_ENDPOINTS } from './ManageSubMeter.constants';

export function SubMeterListService(plantID) {
  const queryParam = { meter_type: 'sub_meter' };
  return http.get(API_ENDPOINTS.SUB_METER_LIST(plantID), queryParam);
}
