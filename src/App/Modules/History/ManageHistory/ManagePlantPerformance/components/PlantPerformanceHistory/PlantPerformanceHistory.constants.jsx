export const API_ENDPOINTS = {
  PLANT_PERFORMANCE_HISTORY: (plantID) =>
    `v1/meter_reading/${plantID}/plant-performance/history`,
};
export const COLUMNS = [
  {
    title: 'Meter Name',
    dataIndex: 'meterName',
    key: 'meterName',
  },
  {
    title: 'Energy Consumption Summary (kWh)',
    dataIndex: 'energyConsumption',
    key: 'energyConsumption',
    align: 'center',
  },
  {
    title: 'Percentage Share (%)',
    dataIndex: 'percentageShare',
    key: 'percentageShare',
    align: 'center',
  },
];
