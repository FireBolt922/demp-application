import http from 'utilities/http';
import { API_ENDPOINTS } from './Transformer.constants';

export function getTransformerInfo(plantID, meterId) {
  return http.get(API_ENDPOINTS.TRANSFORMER_DATA(plantID, meterId));
}
export function graphDataService(meterId, params, page) {
  // page_size : 199 (Data Points)
  const queryParam = { fields: params, page, page_size: 199 };
  return http.get(
    `${API_ENDPOINTS.HT_METER_GRAPH_DATA}/${meterId}/graph`,
    queryParam,
  );
}
