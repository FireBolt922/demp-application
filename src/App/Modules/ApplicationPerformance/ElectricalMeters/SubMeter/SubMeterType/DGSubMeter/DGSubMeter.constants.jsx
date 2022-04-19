export const API_ENDPOINTS = Object.freeze({
  DG_SUB_METER_DATA_GRAPH: `v1/meter_reading/meter/sub-meter`,
  DG_SUB_METER_DATA: (plantID, meterId) =>
    `v1/meter_reading/${plantID}/meter/sub-meter/${meterId}`,
});

export const GRAPH_OPTION = [
  {
    key: 1,
    value: 'power_factor',
    field: 'Power Factor',
  },
  {
    key: 2,
    value: 'demand_total',
    field: 'KVA',
  },
  {
    key: 3,
    value: 'voltage_average',
    field: 'Voltage',
  },
  {
    key: 4,
    value: 'current_total',
    field: 'Current',
  },
  {
    key: 5,
    value: 'r_phase_current',
    field: 'R Phase Current',
  },
  {
    key: 6,
    value: 'y_phase_current',
    field: 'Y Phase Current',
  },
  {
    key: 7,
    value: 'b_phase_current',
    field: 'B Phase Current',
  },
  {
    key: 8,
    value: 'active_power',
    field: 'kW',
  },
];
export const POWER_FACTOR = {
  key: 'power_factor',
  value: 'Power Factor',
};
export const KVA = {
  key: 'demand_total',
  value: 'KVA',
};
export const VOLTAGE = {
  key: 'voltage_average',
  value: 'Voltage',
};
export const CURRENT = {
  key: 'current_total',
  value: 'Current',
};
export const KW = {
  key: 'active_power',
  value: 'kW',
};
export const R_PHASE_CURRENT = {
  key: 'r_phase_current',
  value: 'R Phase Current',
};
export const Y_PHASE_CURRENT = {
  key: 'y_phase_current',
  value: 'Y Phase Current',
};
export const B_PHASE_CURRENT = {
  key: 'b_phase_current',
  value: 'B Phase Current',
};
