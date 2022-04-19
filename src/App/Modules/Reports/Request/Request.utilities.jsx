export const dummyMeterList = {
  ht_meter: [
    { name: 'ht meter 1', id: 1, meterFirstDate: 1613301729 },
    { name: 'ht meter 2', id: 2, meterFirstDate: 1613301729 },
    { name: 'ht meter 3', id: 3, meterFirstDate: 1613301729 },
    { name: 'ht meter 4', id: 4, meterFirstDate: 1613301729 },
  ],
  sub_meter: [
    { name: 'Sub Meter 1 Default', id: 1, meterFirstDate: 1613301729 },
    { name: 'Sub Meter 2 DG', id: 2, meterFirstDate: 1613301729 },
    { name: 'Sub Meter 3 Solar', id: 3, meterFirstDate: 1613301729 },
    { name: 'sub meter 4 Air Compressor', id: 4, meterFirstDate: 1613301729 },
    { name: 'sub meter 5', id: 5, meterFirstDate: 1613301729 },
    { name: 'sub meter 6', id: 6, meterFirstDate: 1613301729 },
    { name: 'sub meter 7', id: 7, meterFirstDate: 1613301729 },
    { name: 'sub meter 8', id: 8, meterFirstDate: 1613301729 },
    { name: 'sub meter 9', id: 9, meterFirstDate: 1613301729 },
    { name: 'sub meter 10', id: 10, meterFirstDate: 1613301729 },
    { name: 'sub meter 11', id: 11, meterFirstDate: 1613301729 },
    { name: 'sub meter 12', id: 12, meterFirstDate: 1613301729 },
    { name: 'sub meter 13', id: 13, meterFirstDate: 1613301729 },
    { name: 'sub meter 14', id: 14, meterFirstDate: 1613301729 },
    { name: 'sub meter 15', id: 15, meterFirstDate: 1613301729 },
    { name: 'sub meter 16', id: 16, meterFirstDate: 1613301729 },
    { name: 'sub meter 17', id: 17, meterFirstDate: 1613301729 },
    { name: 'sub meter 18', id: 18, meterFirstDate: 1613301729 },
    { name: 'sub meter 19', id: 19, meterFirstDate: 1613301729 },
    { name: 'sub meter 20', id: 20, meterFirstDate: 1613301729 },
    { name: 'sub meter 21', id: 21, meterFirstDate: 1613301729 },
    { name: 'sub meter 22', id: 22, meterFirstDate: 1613301729 },
    { name: 'sub meter 23', id: 23, meterFirstDate: 1613301729 },
    { name: 'sub meter 24', id: 24, meterFirstDate: 1613301729 },
    { name: 'sub meter 25', id: 25, meterFirstDate: 1613301729 },
    { name: 'sub meter 26', id: 26, meterFirstDate: 1613301729 },
    { name: 'sub meter 27', id: 27, meterFirstDate: 1613301729 },
    { name: 'sub meter 28', id: 28, meterFirstDate: 1613301729 },
    { name: 'sub meter 29', id: 29, meterFirstDate: 1613301729 },
    { name: 'sub meter 30', id: 30, meterFirstDate: 1613301729 },
    { name: 'sub meter 31', id: 31, meterFirstDate: 1613301729 },
    { name: 'sub meter 32', id: 32, meterFirstDate: 1613301729 },
    { name: 'sub meter 33', id: 33, meterFirstDate: 1613301729 },
    { name: 'sub meter 34', id: 34, meterFirstDate: 1613301729 },
    { name: 'sub meter 35', id: 35, meterFirstDate: 1613301729 },
  ],
};

export const dummyShiftData = {
  shiftDetails: [
    {
      key: 'first shift',
      id: 'first shift',
      shiftName: 'first shift',
      startTime: '09:00:00',
      endTime: '17:00:00',
    },
    {
      key: 'second shift',
      id: 'second shift',
      shiftName: 'second shift',
      startTime: '17:00:00',
      endTime: '01:00:00',
    },
    {
      key: 'third shift',
      id: 'third shift',
      shiftName: 'third shift',
      startTime: '01:00:00',
      endTime: '09:00:00',
    },
    {
      key: 'Daily report',
      id: 'Daily report',
      shiftName: 'Daily report',
      startTime: '00:00:00',
      endTime: '23:59:59',
    },
  ],
};

function getDetails(data) {
  if (!data) {
    return [];
  }
  return data.map((items) => {
    return {
      key: items.shift_name,
      id: items.shift_name,
      shiftName: items.shift_name,
      startTime: items.start_time,
      endTime: items.end_time,
    };
  });
}

export function shiftDetailsTransformer(resp) {
  return {
    shiftDetails: getDetails(resp),
  };
}

export function meterNameTransformer(response) {
  if (!response) {
    return [];
  }
  if (response) {
    const allHtMeter = response.ht_meter_list.map((items) => {
      return {
        name: items.name,
        id: items.id,
        meterFirstDate: items.application_details.first_meter_reading_timestamp,
      };
    });
    const allSubMeter = response.sub_meter_list.map((items) => {
      return {
        name: items.name,
        id: items.id,
        meterFirstDate: items.application_details.first_meter_reading_timestamp,
      };
    });
    return { ht_meter: allHtMeter, sub_meter: allSubMeter };
  }
  return null;
}

export function gasMeterListTransformer(response) {
  if (!response) {
    return [];
  }
  if (response) {
    const allMainGasFlowMeterData = response.gas_flow_meter_list.map(
      (items) => {
        return {
          name: items.name,
          id: items.id,
          meterFirstDate:
            items.application_details__first_meter_reading_timestamp,
        };
      },
    );
    const allSubGasFlowMeterData = response.sub_gas_flow_meter_list.map(
      (items) => {
        return {
          name: items.name,
          id: items.id,
          meterFirstDate:
            items.application_details__first_meter_reading_timestamp,
        };
      },
    );
    return {
      gas_flow_meter: allMainGasFlowMeterData,
      sub_gas_flow_meter: allSubGasFlowMeterData,
    };
  }
  return null;
}

export const dummyGasMeterList = {
  gas_flow_meter: [
    { name: 'Gas Flow 1', id: 1, meterFirstDate: 1613301729 },
    { name: 'Gas Flow 2', id: 2, meterFirstDate: 1613301729 },
    { name: 'Gas Flow 3', id: 3, meterFirstDate: 1613301729 },
    { name: 'Gas Flow 4', id: 4, meterFirstDate: 1613301729 },
  ],
  sub_gas_flow_meter: [
    { name: 'Sub gas flow Meter 1 ', id: 1, meterFirstDate: 1613301729 },
    { name: 'Sub gas flow Meter 2 ', id: 2, meterFirstDate: 1613301729 },
    { name: 'Sub gas flow Meter 3 ', id: 3, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 4 ', id: 4, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 5', id: 5, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 6', id: 6, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 7', id: 7, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 8', id: 8, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 9', id: 9, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 10', id: 10, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 11', id: 11, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 12', id: 12, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 13', id: 13, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 14', id: 14, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 15', id: 15, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 16', id: 16, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 17', id: 17, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 18', id: 18, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 19', id: 19, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 20', id: 20, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 21', id: 21, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 22', id: 22, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 23', id: 23, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 24', id: 24, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 25', id: 25, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 26', id: 26, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 27', id: 27, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 28', id: 28, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 29', id: 29, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 30', id: 30, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 31', id: 31, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 32', id: 32, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 33', id: 33, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 34', id: 34, meterFirstDate: 1613301729 },
    { name: 'sub gas flow meter 35', id: 35, meterFirstDate: 1613301729 },
  ],
};
