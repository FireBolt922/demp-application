import http from 'utilities/http';
import { VERIFY_ACCOUNT } from './VerifiedAccount.constants';

export function verifyAccount(data) {
  return http.post(VERIFY_ACCOUNT, data);
}
