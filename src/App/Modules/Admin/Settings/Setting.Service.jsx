import http from 'utilities/http';

import { API_ENDPOINTS } from './Setting.constants';

/** This function makes a GET call for Emails registered */
export function staffUserList(plantID) {
  return http.get(API_ENDPOINTS.STAFF_USER_LIST(plantID));
}

/** This function makes a GET call for notification emails */
export function getContactList(plantID) {
  return http.get(API_ENDPOINTS.CONTACT_LIST(plantID));
}

/** This function makes a PATCH call to update emails to notification list */
export function updateContact(plantID, emailData) {
  return http.patch(API_ENDPOINTS.CONTACT_LIST(plantID), emailData);
}

/** This function makes a PATCH call to add emails to notification list */
export function addContact(plantID, emailData) {
  return http.post(API_ENDPOINTS.CONTACT_LIST(plantID), emailData);
}

/** This function makes a GET call to get contract demand details */
export function contractDemandService(plantID) {
  return http.get(API_ENDPOINTS.CONTRACT_DEMAND(plantID));
}
/** This function makes a PATCH call to update contract demand details */
export function updateContractDemand(plantID, contractDemandData) {
  return http.patch(API_ENDPOINTS.CONTRACT_DEMAND(plantID), contractDemandData);
}

/** This function makes a GET call to get Tariff details */
export function plantTariffService(plantID) {
  return http.get(API_ENDPOINTS.PLANT_TARIFF(plantID));
}

/** This function makes a PATCH call to update Tariff details */
export function updatePlantTariff(plantID, plantTariffData) {
  return http.patch(API_ENDPOINTS.PLANT_TARIFF(plantID), plantTariffData);
}

/** This function makes a POST call to add Tariff details */
export function addPlantTariff(plantID, emailData) {
  return http.post(API_ENDPOINTS.PLANT_TARIFF(plantID), emailData);
}
