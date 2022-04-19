import http from 'utilities/http';
import { API_ENDPOINTS } from './AddTag.constants';

export function tagListService(plantId) {
  return http.get(API_ENDPOINTS.TAG_LIST(plantId));
}

export function assignTagService(plantId, meterCategory, formData) {
  const queryParam = { meter_type: meterCategory };
  return http.post(API_ENDPOINTS.ASSIGN_TAG(plantId), formData, queryParam);
}

export function createTagService(plantId, formData) {
  return http.post(API_ENDPOINTS.TAG_LIST(plantId), formData);
}
