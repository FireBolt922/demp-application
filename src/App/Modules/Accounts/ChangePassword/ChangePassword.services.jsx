import http from 'utilities/http';
import API_ENDPOINTS from './ChangePassword.constants';

export function changePasswordService(data) {
  return http.put(API_ENDPOINTS.CHANGE_PASSWORD, data);
}
