import http from 'utilities/http';
import { API_ENDPOINTS } from './DefaultSubGasMeter.constants';

export function subGasMeterHistoryService(
  plantID,
  meterID,
  startDate,
  endDate,
) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    API_ENDPOINTS.SUB_GAS_METER_HISTORY(plantID, meterID),
    queryParam,
  );
}
