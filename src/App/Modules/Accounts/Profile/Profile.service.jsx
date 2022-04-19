import http from 'utilities/http';

import { PROFILE_ENDPOINT } from './Profile.constants';

export function GetProfile() {
  return http.get(PROFILE_ENDPOINT);
}
