/** This function is to format Contact component response */
function contactList(data) {
  return data.map((item) => {
    return {
      id: item.id,
      email: item.email,
      phoneNumber: item.phone_number,
      isActive: item.is_active,
    };
  });
}
/** This function is Contact component transformer */
export function staffListTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    staffListData: contactList(resp.results),
  };
}
/** This function is Add/Update Contact component transformer */
export function emailListTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    contactListData: contactList(resp.notification_emails),
  };
}
/** This function is Contract Demand component transformer */
export function contractDemandTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    id: resp.id,
    name: resp.name,
    details: resp.details,
    plantLocation: resp.plant_location,
    contractDemand: resp.contract_demand,
  };
}

/** This function is to format Tariff component response */
function tariffData(data) {
  return data.map((items) => {
    return {
      key: items.id,
      id: items.id,
      name: items.name,
      description: items.description,
      value: items.value,
    };
  });
}
/** This function is Tariff component transformer */
export function plantTariffTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    plantTariffList: tariffData(resp.tariff_data),
  };
}
