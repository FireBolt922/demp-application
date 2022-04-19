export const API_ENDPOINTS = {
  SUB_GAS_METER_HISTORY: (plantID, meterId) =>
    `v1/meter_reading/${plantID}/gas-flow-meters/sub-gas-flow-meter-details/${meterId}/history`,
};
