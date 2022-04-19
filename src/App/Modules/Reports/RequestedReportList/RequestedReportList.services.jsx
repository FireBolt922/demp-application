import http from 'utilities/http';
import { API_ENDPOINTS } from './RequestedReportList.constants';

export function getRequestData() {
  return http.get(API_ENDPOINTS.GET_REQUEST_DATA);
}
