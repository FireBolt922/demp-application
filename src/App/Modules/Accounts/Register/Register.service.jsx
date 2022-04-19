import http from 'utilities/http';

import { REGISTER_ENDPOINT } from './Register.constants';

export function RegisterUser(data) {
  return http.post(REGISTER_ENDPOINT, data);
}
