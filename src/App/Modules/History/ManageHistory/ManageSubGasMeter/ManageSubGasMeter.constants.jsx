export const API_ENDPOINTS = {
  SUB_GAS_METER_LIST: (plantID) =>
    `v1/meter_reading/${plantID}/gas-flow-meters/`,
};

export const METER_TYPE = 'subGasMeter';
