export const API_ENDPOINTS = {
  TRANSFORMER_DATA: (plantID, meterId) =>
    `v1/meter_reading/${plantID}/meter/ht-meter/${meterId}`,
  HT_METER_GRAPH_DATA: `v1/meter_reading/meter/ht-meter`,
};

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
  {
    key: 9,
    value: 'reactive_power',
    field: 'Reactive Power',
  },
  {
    key: 10,
    value: 'v_r_harmonics',
    field: 'Vr Harmonics',
  },
  {
    key: 11,
    value: 'v_y_harmonics',
    field: 'Vy Harmonics',
  },
  {
    key: 12,
    value: 'v_b_harmonics',
    field: 'Vb Harmonics',
  },
  {
    key: 13,
    value: 'i_r_harmonics',
    field: 'Ir Harmonics',
  },
  {
    key: 14,
    value: 'i_y_harmonics',
    field: 'Iy Harmonics',
  },
  {
    key: 15,
    value: 'i_b_harmonics',
    field: 'Ib Harmonics',
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
export const REACTIVE_POWER = {
  key: 'reactive_power',
  value: 'Reactive Power',
};
export const VR_HARMONICS = {
  key: 'v_r_harmonics',
  value: 'Vr Harmonics',
};
export const VY_HARMONICS = {
  key: 'v_y_harmonics',
  value: 'Vy Harmonics',
};

export const VB_HARMONICS = {
  key: 'v_b_harmonics',
  value: 'Vb Harmonics',
};
export const IR_HARMONICS = {
  key: 'i_r_harmonics',
  value: 'Ir Harmonics',
};
export const IY_HARMONICS = {
  key: 'i_y_harmonics',
  value: 'Iy Harmonics',
};
export const IB_HARMONICS = {
  key: 'i_b_harmonics',
  value: 'Ib Harmonics',
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
