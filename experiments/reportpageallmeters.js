const moment = require('moment');

const reportResponse = {
  ht_meter_list: [
    {
      name: 'ht meter 1',
      id: 1,
      production_unit: 'tonnes',
      application_type: 4,
      application_details: {
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'ht meter 2',
      id: 2,
      production_unit: 'tonnes',
      application_type: 4,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'ht meter 3',
      id: 3,
      production_unit: 'tonnes',
      application_type: 4,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'ht meter 4',
      id: 4,
      production_unit: 'tonnes',
      application_type: 15,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'ht meter 5',
      id: 5,
      production_unit: 'tonnes',
      application_type: 15,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
  ],
  sub_meter_list: [
    {
      name: 'Sub Meter 1 Default',
      id: 1,
      production_unit: 'tonnes',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'Sub Meter 2 DG',
      id: 2,
      production_unit: 'tonnes',
      application_type: 2,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'Sub Meter 3 Solar',
      id: 3,
      production_unit: 'tonnes',
      application_type: 3,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 4',
      id: 4,
      production_unit: 'tonnes',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 5',
      id: 5,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 6',
      id: 6,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 7',
      id: 7,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 8',
      id: 8,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 9',
      id: 9,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 10',
      id: 10,
      production_unit: 'tonnes',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 11',
      id: 11,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 12',
      id: 12,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 13',
      id: 13,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 14',
      id: 14,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 15',
      id: 15,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 16',
      id: 16,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 17',
      id: 17,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 18',
      id: 18,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 19',
      id: 19,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 20',
      id: 20,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 21',
      id: 21,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 22',
      id: 22,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 23',
      id: 23,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 24',
      id: 24,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 25',
      id: 25,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 26',
      id: 26,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 27',
      id: 27,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 28',
      id: 28,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 29',
      id: 29,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 30',
      id: 30,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 31',
      id: 31,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
    {
      name: 'sub meter 35',
      id: 35,
      production_unit: '0',
      application_type: 1,
      application_details: {
        testing: 'testing',
        first_meter_reading_timestamp: 1613301729,
      },
    },
  ],
};
const htMeterList = [];
const subMeterList = [];
function testReport() {
  reportResponse.ht_meter_list.map((items) =>
    htMeterList.push({
      name: items.name,
      id: items.id,
      meterFirstDate: moment
        .unix(items.application_details.first_meter_reading_timestamp)
        .format('YYYY-MM-DD'),
    }),
  );
  reportResponse.sub_meter_list.map((items) => {
    return {
      name: items.name,
      id: items.id,
      meterFirstDate: items.first_meter_reading_timestamp,
    };
  });
}
testReport();
