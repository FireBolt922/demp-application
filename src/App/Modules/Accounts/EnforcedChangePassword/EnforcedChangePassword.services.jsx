import http from 'utilities/http';
import API_ENDPOINTS from './EnforcedChangePassword.constants';

export function changePasswordService(data) {
  return http.put(API_ENDPOINTS.CHANGE_PASSWORD, data);
}
