const response = {
  is_producing_ht_meter: [
    {
      name: 'ht meter 1',
      id: 1,
      production_unit: 'tonnes',
      application_type: 4,
      application_details: { first_meter_reading_timestamp: 1613301729 },
    },
    {
      name: 'ht meter 2',
      id: 2,
      production_unit: 'tonnes',
      application_type: 15,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'ht meter 4',
      id: 4,
      production_unit: 'tonnes',
      application_type: 15,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
  ],
  is_producing_sub_meter: [
    {
      name: 'sub meter 4 Air Compressor',
      id: 4,
      production_unit: 'tonnes',
      application_type: 5,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 10',
      id: 10,
      production_unit: 'tonnes',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
  ],
  is_producing_gas_flow_meter: [
    {
      name: 'gas flow meter 1',
      id: 1,
      gas_meter_type: 1,
      application_details__first_meter_reading_timestamp: 1621951652.258759,
    },
  ],
  is_producing_sub_gas_flow_meter: [],
};
const gasFlowMeterList = [];
const subGasFlowMeterList = [];
const subMeterList = [];
const htMeterList = [];
htMeterList.push(response.is_producing_ht_meter);
subMeterList.push(response.is_producing_sub_meter);
gasFlowMeterList.push(response.is_producing_gas_flow_meter);
subGasFlowMeterList.push(response.is_producing_sub_gas_flow_meter);
console.log('This is console', htMeterList);
