import http from 'utilities/http';

import { API_ENDPOINTS } from './GasMeter.constants';

export function gasMeterService(plantId, meterId) {
  return http.get(
    `${API_ENDPOINTS.GAS_METER_DATA}/${plantId}/gas-flow-meters/gas-flow-meter-details/${meterId}`,
  );
}
export function gasMeterGraphDataService(plantId, meterId, params, page) {
  // page_size : 199 (Data Points)
  const queryParam = { fields: params, page, page_size: 199 };
  return http.get(
    `${API_ENDPOINTS.GAS_METER_DATA}/${plantId}/gas-flow-meters/gas-flow-meter-details/${meterId}/graph`,
    queryParam,
  );
}
