export const API_ENDPOINTS = {
  DG_SUB_METER_HISTORY: (plantID, meterID) =>
    `v1/meter_reading/${plantID}/meter/sub-meter/${meterID}/history`,
};
