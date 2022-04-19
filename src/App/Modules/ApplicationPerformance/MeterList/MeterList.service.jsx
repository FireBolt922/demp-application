import http from 'utilities/http';

import { API_ENDPOINTS } from 'App/Modules/ApplicationPerformance/MeterList/MeterList.constants';

export function getMeterListInfo() {
  return http.get(`${API_ENDPOINTS.BOOTSTRAP_API}`);
}
