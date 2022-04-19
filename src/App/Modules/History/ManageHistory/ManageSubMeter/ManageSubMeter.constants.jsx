export const API_ENDPOINTS = {
  SUB_METER_LIST: (plantID) =>
    `v1/meter_reading/${plantID}/connected-meter-list`,
};
export const METER_TYPE = 'subMeter';
