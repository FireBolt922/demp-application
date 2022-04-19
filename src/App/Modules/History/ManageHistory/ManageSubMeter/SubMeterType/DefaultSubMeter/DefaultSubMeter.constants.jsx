import { PAGE } from 'App/Constants/app.constants';

export const API_ENDPOINTS = {
  SUB_METER_HISTORY: (plantID, meterId) =>
    `v1/meter_reading/${plantID}/meter/sub-meter/${meterId}${PAGE.HISTORY}`,
};
