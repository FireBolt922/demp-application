import http from 'utilities/http';
import { API_ENDPOINTS } from './Request.constants';

export function getShiftDetails(plantId) {
  return http.get(API_ENDPOINTS.SHIFT_DATA(plantId));
}

export function getMeterName(plantId) {
  return http.get(
    `${API_ENDPOINTS.APPLICATION_TYPE}/${plantId}/connected-meter-list`,
  );
}
export function getReportDetails(value) {
  return http.post(API_ENDPOINTS.GET_REPORT_DETAILS, value);
}

export function getGasMeterList(plantID) {
  return http.get(
    `${API_ENDPOINTS.APPLICATION_TYPE}/${plantID}/gas-flow-meters/`,
  );
}
