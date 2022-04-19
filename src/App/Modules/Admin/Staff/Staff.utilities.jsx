import { DESIGNATIONS } from 'App/Constants/app.constants';

const designation = {
  cxo: DESIGNATIONS.CXO,
  'production entry user': DESIGNATIONS['PRODUCTION ENTRY USER'],
  'plant head': DESIGNATIONS['PLANT HEAD'],
};

export function staffDesignationTransformer(resp) {
  if (!resp) {
    return [];
  }
  return resp.map((data) => {
    return {
      id: data.id,
      designationName: designation[data.name],
    };
  });
}
export function staffPlantTransformer(resp) {
  if (!resp) {
    return [];
  }
  return resp.map((data) => {
    return {
      id: data.id,
      plantName: data.name,
    };
  });
}
export function staffListTransformer(resp) {
  if (!resp) {
    return [];
  }
  return resp.results.map((data) => {
    return {
      key: data.id,
      id: data.id,
      designationName: designation[data.designation_details.name],
      designationId: data.designation_details.id,
      username: data.username,
      userId: data.user,
      allowedPlants: data.allowed_plants,
    };
  });
}
export function userSearchTransformer(resp) {
  if (!resp) {
    return [];
  }
  return resp.results.map((data) => {
    return {
      value: data.username,
      id: data.id,
    };
  });
}
export function verifyUserTransformer(resp) {
  if (!resp) {
    return [];
  }
  return {
    userId: resp.user_id,
    isUserRegistered: resp.is_user_registered,
    message: resp.message,
  };
}
