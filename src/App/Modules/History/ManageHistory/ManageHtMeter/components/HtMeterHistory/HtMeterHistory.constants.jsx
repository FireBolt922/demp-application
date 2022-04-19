export const API_ENDPOINTS = {
  HT_METER_HISTORY: (plantId, meterID) =>
    `v1/meter_reading/${plantId}/meter/ht-meter/${meterID}/history`,
};
