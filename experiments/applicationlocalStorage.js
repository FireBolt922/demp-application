const plantFeatures = [
  {
    plantId: 2,
    meterCategory: {
      gas_flow_meters: {
        name: 'Gas Flow Meters',
        is_enabled: false,
        meter_types: {
          gas_flow_meter: false,
          sub_gas_flow_meter: false,
        },
      },
      electrical_meters: {
        name: 'Electrical Meters',
        is_enabled: true,
        meter_types: {
          ht_meter: true,
          sub_meter: true,
        },
      },
    },
    plantStartDate: '02-06-2021',
  },
  {
    plantId: 1,
    meterCategory: {
      gas_flow_meters: {
        name: 'Gas Flow Meters',
        is_enabled: true,
        meter_types: {
          gas_flow_meter: true,
          sub_gas_flow_meter: true,
        },
      },
      electrical_meters: {
        name: 'Electrical Meters',
        is_enabled: true,
        meter_types: {
          ht_meter: true,
          sub_meter: true,
        },
      },
    },
    plantStartDate: '02-06-2021',
  },
];
function data(plantId) {
  data = [];
  plantFeatures.map((items) => {
    items.plantId === plantId
      ? data.push({
          plantId: items.plantId,
          plantStartDate: items.plantStartDate,
          meterCategory: {
            gasFlowMeter: {
              name: items.meterCategory.gas_flow_meters.name,
              isEnabled: items.meterCategory.gas_flow_meters.is_enabled,
              meterType: {
                gasFlowMeter:
                  items.meterCategory.gas_flow_meters.meter_types
                    .gas_flow_meter,
                subGasFlowMeter:
                  items.meterCategory.gas_flow_meters.meter_types
                    .sub_gas_flow_meter,
              },
            },
            electricalMeter: {
              name: items.meterCategory.electrical_meters.name,
              isEnabled: items.meterCategory.electrical_meters.is_enabled,
              meterType: {
                htMeter:
                  items.meterCategory.electrical_meters.meter_types.ht_meter,
                subMeter:
                  items.meterCategory.electrical_meters.meter_types.sub_meter,
              },
            },
          },
        })
      : null;
  });
  return data;
}
console.log(data(1));
