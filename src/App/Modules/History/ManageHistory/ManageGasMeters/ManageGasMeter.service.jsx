import http from 'utilities/http';
import { API_ENDPOINTS } from './ManageGasMeter.constants';

export function gasMeterListService(plantID) {
  const queryParam = { meter_type: 'gas_flow_meter' };
  return http.get(
    // Doing this beacause of error in sentry
    `${API_ENDPOINTS.GAS_METER_LIST}/${plantID}/gas-flow-meters/`,
    queryParam,
  );
}
