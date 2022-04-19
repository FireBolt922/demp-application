import http from 'utilities/http';
import { API_ENDPOINTS } from './ManageSubGasMeter.constants';

export function subGasMeterListService(plantID) {
  const queryParam = { meter_type: 'sub_gas_flow_meter' };
  return http.get(API_ENDPOINTS.SUB_GAS_METER_LIST(plantID), queryParam);
}
