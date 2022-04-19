import moment from 'moment';
import http from 'utilities/http';
import { API_ENDPOINTS } from './PlantPerformanceHistory.constants';

export function PlantPerformanceHistoryService(plantID, startDate, endDate) {
  const queryParam = {
    from: moment(startDate).format('YYYY-MM-DD'),
    to: moment(endDate).format('YYYY-MM-DD'),
  };
  return http.get(API_ENDPOINTS.PLANT_PERFORMANCE_HISTORY(plantID), queryParam);
}
