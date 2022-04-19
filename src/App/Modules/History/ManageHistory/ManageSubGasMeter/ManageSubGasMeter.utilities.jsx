import moment from 'moment';

function subGasMeterModify(data) {
  return data.map((item) => {
    return {
      key: item.id,
      id: item.id,
      name: item.name,
      applicationType: item.gas_meter_type,
      readingStartDate: moment
        .unix(item.application_details__first_meter_reading_timestamp)
        .format('YYYY-MM-DD'),
    };
  });
}

export function subGasMeterListTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    subGasMeterListData: subGasMeterModify(resp.sub_gas_flow_meter_list),
  };
}
