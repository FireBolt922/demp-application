import { DESIGNATIONS } from 'App/Constants/app.constants';

const designation = {
  cxo: DESIGNATIONS.CXO,
  'production entry user': DESIGNATIONS['PRODUCTION ENTRY USER'],
  'plant head': DESIGNATIONS['PLANT HEAD'],
};

function modifyPlantName(data) {
  return data.map((items) => {
    return {
      key: items.id,
      id: items.id,
      plantName: items.name,
      designation: designation[items.designation_name],
    };
  });
}
export function ProfileTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    organization: resp.organization_name,
    plants: modifyPlantName(resp.plants),
    userId: resp.user_id,
    userName: resp.username,
    email: resp.email,
  };
}
