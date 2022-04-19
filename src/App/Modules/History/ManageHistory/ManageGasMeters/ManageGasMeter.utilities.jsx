import moment from 'moment';

function gasMeter(data) {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      meterType: item.gas_meter_type,
      readingStartDate: moment
        .unix(item.application_details__first_meter_reading_timestamp)
        .format('YYYY-MM-DD'),
    };
  });
}

export function gasMeterListTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    gasMeterListData: gasMeter(resp.gas_flow_meter_list),
  };
}
