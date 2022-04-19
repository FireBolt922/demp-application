import http from 'utilities/http';
import { API_ENDPOINTS } from './DGSubMeter.constants';

export function getDGSubMeterInfo(plantID, meterID) {
  return http.get(API_ENDPOINTS.DG_SUB_METER_DATA(plantID, meterID));
}

export function graphDataService(meterId, params, page) {
  // page_size : 199 (Data Points)
  const queryParam = { fields: params, page, page_size: 199 };
  return http.get(
    `${API_ENDPOINTS.DG_SUB_METER_DATA_GRAPH}/${meterId}/graph`,
    queryParam,
  );
}
