export const API_ENDPOINTS = Object.freeze({
  TAG_LIST: (plantId) => `v1/tag/${plantId}`,
  ASSIGN_TAG: (plantId) => `v1/tag/${plantId}/assign`,
});

export const TAG_DESCRIPTION = 'Assign tags to meters according to department';
