import http from 'utilities/http';

import { RESET_PASSWORD } from './ResetPassword.constants';

export function ResetPasswordPostReq(data) {
  const queryParameters = {
    email: data.email,
    token: data.token,
    password: data.password,
  };

  return http.post(RESET_PASSWORD, queryParameters);
}
