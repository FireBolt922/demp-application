import http from 'utilities/http';

import { API_ENDPOINTS } from './Staff.constants';

export function getAllStaffInfo() {
  return http.get(API_ENDPOINTS.STAFF);
}
export function getAllDesignationInfo() {
  return http.get(API_ENDPOINTS.DESIGNATION);
}
export function getAllPlantInfo() {
  return http.get(API_ENDPOINTS.PLANT);
}
export function addStaff(data) {
  return http.post(API_ENDPOINTS.STAFF, data);
}
export function updateStaff(staffId, data) {
  return http.put(`${API_ENDPOINTS.STAFF}/${staffId}`, data);
}
export function deleteStaff(staffId) {
  return http.deleteAPI(`${API_ENDPOINTS.STAFF}/${staffId}`);
}
export function userSearch(data) {
  const queryParam = { search: data, page: 1 };
  return http.get(API_ENDPOINTS.USERSEARCH, queryParam);
}
export function verifyUserService(plantId, emailId) {
  const queryParam = { email: emailId };
  return http.get(`${API_ENDPOINTS.VERIFY_USER}/${plantId}/users`, queryParam);
}
