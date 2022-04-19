export const API_ENDPOINTS = {
  AIR_COMPRESSOR_SUB_METER_HISTORY: (plantID, meterId) =>
    `v1/meter_reading/${plantID}/meter/sub-meter/${meterId}/history`,
};
