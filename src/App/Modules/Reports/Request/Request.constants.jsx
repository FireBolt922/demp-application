export const API_ENDPOINTS = {
  SHIFT_DATA: (plantId) => `v1/account/${plantId}/plant/shift-details`,
  APPLICATION_TYPE: 'v1/meter_reading',
  GET_REPORT_DETAILS: 'v1/report/request',
  PLANT_DETAILS: (plantID) => `v1/meter_reading/${plantID}/plant-performance`,
};

export const REPORT_TYPE = {
  electrical_meters: [
    { name: 'Measured Data', key: 'measured_data' },
    { name: 'Plant Data', key: 'plant_data' },
    { name: 'Application Data', key: 'application_data' },
    { name: 'Plant Summary', key: 'plant_summary' },
  ],
  gas_flow_meters: [
    { name: 'Measured Data', key: 'measured_data' },
    { name: 'Application Data', key: 'application_data' },
  ],
};
