import http from 'utilities/http';

export function getWaterMeterListInfo() {
  return http.get(`v1/meter_reading/meter/1`);
}
