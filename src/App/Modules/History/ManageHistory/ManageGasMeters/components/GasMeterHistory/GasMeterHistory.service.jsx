import http from 'utilities/http';
import { API_ENDPOINTS } from './GasMeterHistory.constants';

export function getGasMeterHistoryService(
  plantID,
  meterID,
  startDate,
  endDate,
) {
  const queryParam = { from: startDate, to: endDate };
  return http.get(
    `${API_ENDPOINTS.GAS_METER_HISTORY}/${plantID}/gas-flow-meters/gas-flow-meter-details/${meterID}/history`,
    queryParam,
  );
}
