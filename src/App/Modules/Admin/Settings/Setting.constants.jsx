export const API_ENDPOINTS = Object.freeze({
  CONTRACT_DEMAND: (plantID) => `v1/account/${plantID}/plant-information`,
  STAFF_USER_LIST: (plantID) => `v1/account/${plantID}/staff-users`,
  CONTACT_LIST: (plantID) =>
    `v1/plant_setting/${plantID}/plant-notification-emails`,
  PLANT_TARIFF: (plantID) => `v1/plant_setting/${plantID}/plant-tariff`,
});

export const SUCCESS_ALERT_MESSAGE = 'Updated Successfully';

export const FAILURE_ALERT_MESSAGE = 'Failed To Update';
