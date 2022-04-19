import { PAGE } from 'App/Constants/app.constants';

export const API_ENDPOINTS = {
  SOLAR_SUB_METER_HISTORY: (plantID, meterID) =>
    `v1/meter_reading/${plantID}/meter/sub-meter/${meterID}${PAGE.HISTORY}`,
};
