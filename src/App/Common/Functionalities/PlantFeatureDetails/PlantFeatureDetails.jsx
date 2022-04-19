import customLocalStorage from 'utilities/storage';
/**
 *
 * @param {int} plantId: Id of the plant
 * @returns {object}: All the plant related features
 */
export default function plantFeatureDetailsFunction(plantId) {
  let plantData;
  const plantFeatures = customLocalStorage.getItem('plantFeatures', [], 'json');
  plantFeatures.forEach((items) => {
    if (items.plantId === Number(plantId)) {
      plantData = {
        plantId: items.plantId,
        plantStartDate: items.plantStartDate,
        meterCategory: {
          gasFlowMeter: {
            name: items.meterCategory.gas_flow_meters.name,
            isEnabled: items.meterCategory.gas_flow_meters.is_enabled,
            meterType: {
              gasFlowMeter:
                items.meterCategory.gas_flow_meters.meter_types.gas_flow_meter,
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
      };
    }
  });
  return plantData;
}
