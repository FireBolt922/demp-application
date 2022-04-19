import * as customLocalStorage from 'utilities/storage/customLocalStorage';

function featureList(data) {
  const plantID = customLocalStorage.getItem('selectedPlant');
  const temp = [];
  data.plant_features.map((items) => {
    if (Number(plantID) === Number(items.plant_id)) {
      temp.push(items.feature_list.meter_category);
      return true;
    }
    return false;
  });
  return temp;
}
export function meterListTransformer(resp) {
  if (!resp) {
    return [];
  }
  return { bootStrapData: featureList(resp) };
}
