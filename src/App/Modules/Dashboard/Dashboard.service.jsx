import http from 'utilities/http';
import { API_ENDPOINTS } from './Dashboard.constants';

export function DashboardService(plantID) {
  return http.get(`${API_ENDPOINTS.DASHBOARD}/${plantID}/dashboard`);
}
export function GraphService(plantID) {
  return http.get(`${API_ENDPOINTS.DASHBOARD}/${plantID}/dashboard/graph`);
}
