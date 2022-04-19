import http from 'utilities/http';

import { FORGOT_ENDPOINT } from './ForgotPassword.constants';

export function ForgotPasswordPostReq(data) {
  return http.post(FORGOT_ENDPOINT, data);
}
