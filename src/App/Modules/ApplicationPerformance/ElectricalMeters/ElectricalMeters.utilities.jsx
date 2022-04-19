import { APPLICATION_TYPE } from 'App/Constants/app.constants';

export const dummyTagResponse = [
  {
    id: 1,
    name: 'Enerlly Department A',
  },
  {
    id: 2,
    name: 'Enerlly Department B',
  },
  {
    id: 3,
    name: 'Enerlly Department C',
  },
  {
    id: 4,
    name: 'Enerlly Department D',
  },
];

export const dummyMeterListDataElectrical = {
  electricalMeterList: [
    {
      key: 1,
      id: 1,
      name: 'ht meter 1',
      details: 'details ht meter',
      applicationType: 4,
      applicationCategory: 'ht_meter',
      percentageLoading: '140.7 %',
      powerFactor: '-0.388',
      currentTotal: '69.91',
      meterStatus: 'OFF',

      assignedTagsID: [1, 2],
    },
    {
      key: 2,
      id: 2,
      name: 'ht meter 2',
      details: 'details ht meter',
      applicationType: 4,
      applicationCategory: 'ht_meter',
      percentageLoading: '0.0 %',
      powerFactor: '-0.548',
      currentTotal: '14.94',
      meterStatus: 'OFF',

      assignedTagsID: [1, 2],
    },
    {
      key: 3,
      id: 3,
      name: 'ht meter 3',
      details: 'details ht meter',
      applicationType: 4,
      applicationCategory: 'ht_meter',
      percentageLoading: '140.4 %',
      powerFactor: '-0.258',
      currentTotal: '-10.44',
      meterStatus: 'OFF',

      assignedTags: [],
      assignedTagsID: [],
    },
  ],
  auxiliaryMeterList: [
    {
      key: 'Sub Meter 2 DG',
      id: 2,
      name: 'Sub Meter 2 DG',
      details: 'keep the type and name the same. Do not change it.',
      applicationType: 2,
      applicationCategory: 'sub_meter',
      percentageLoading: '130.3 %',
      powerFactor: '-0.003',
      currentTotal: '39.70',
      meterStatus: 'OFF',
      assignedTags: [
        {
          id: 2,
          name: 'Enerlly Department B',
        },
      ],
      assignedTagsID: [2],
    },
    {
      key: 'Sub Meter 3 Solar',
      id: 3,
      name: 'Sub Meter 3 Solar',
      details: 'Keep the type and name the same. Do not change it',
      applicationType: 3,
      applicationCategory: 'sub_meter',
      percentageLoading: '1173.2 %',
      powerFactor: '-0.466',
      currentTotal: '24.68',
      meterStatus: 'OFF',
      assignedTags: [
        {
          id: 3,
          name: 'Enerlly Department C',
        },
      ],
      assignedTagsID: [3],
    },
    {
      key: 'ht meter 4',
      id: 4,
      name: 'ht meter 4',
      details: 'details ht meter',
      applicationType: 15,
      applicationCategory: 'ht_meter',
      percentageLoading: '124.3 %',
      powerFactor: '0.111',
      currentTotal: '0.58',
      meterStatus: 'OFF',
      assignedTags: [],
      assignedTagsID: [],
    },
    {
      key: 'ht meter 5',
      id: 5,
      name: 'ht meter 5',
      details: 'details ht meter',
      applicationType: 15,
      applicationCategory: 'ht_meter',
      percentageLoading: '0.0 %',
      powerFactor: '0.254',
      currentTotal: '34.08',
      meterStatus: 'OFF',
      assignedTags: [],
      assignedTagsID: [],
    },
  ],
};
/**
 * This List is used to seperate these type of meters from the result
 * UPS
 * Solar
 * DG Set
 * */
const verifyAppTypes = [
  APPLICATION_TYPE.UPS,
  APPLICATION_TYPE.SOLAR,
  APPLICATION_TYPE.DG_SET,
];
/**
 * This function filter only HT Meter and Sub Meter
 * It does not return the UPS, Solar and DG Set Meter
 * */
function electricalMeterList(resp) {
  const electricalMeterListDataSet = [];
  resp.map((data) => {
    if (verifyAppTypes.indexOf(data.application_type) === -1) {
      const subMeterList = [];
      data.sub_meter.map((subMeter) => {
        if (verifyAppTypes.indexOf(subMeter.application_type) === -1) {
          subMeterList.push({
            key: subMeter.id,
            id: subMeter.id,
            name: subMeter.name,
            details: subMeter.details,
            applicationType: subMeter.application_type,
            applicationCategory:
              subMeter.application_details.application_category,
            percentageLoading: `${subMeter.meter_reading.percentage_loading.toFixed(
              1,
            )} %`,
            powerFactor: subMeter.meter_reading.power_factor.toFixed(3),
            currentTotal: subMeter.meter_reading.current_total.toFixed(2),
            meterStatus: subMeter.meter_reading.meter_status,
          });
        }
        return true;
      });
      electricalMeterListDataSet.push({
        key: data.id,
        id: data.id,
        name: data.name,
        details: data.details,
        applicationType: data.application_type,
        applicationCategory: data.application_details.application_category,
        percentageLoading: `${data.meter_reading.percentage_loading.toFixed(
          1,
        )} %`,
        powerFactor: data.meter_reading.power_factor.toFixed(3),
        currentTotal: data.meter_reading.current_total.toFixed(2),
        meterStatus: data.meter_reading.meter_status,
        children: subMeterList,
      });
    }
    return true;
  });
  return electricalMeterListDataSet;
}
/**
 * This function filter only UPS, Solar and DG Set Meter
 * It does not return the HT Meter and Sub Meter here
 * */
function auxiliaryMeterList(resp) {
  const auxiliaryMeterListDataSet = [];
  resp.map((item) => {
    if (verifyAppTypes.indexOf(item.application_type) !== -1) {
      auxiliaryMeterListDataSet.push({
        key: item.name,
        id: item.id,
        name: item.name,
        details: item.details,
        applicationType: item.application_type,
        applicationCategory: item.application_details.application_category,
        percentageLoading: `${item.meter_reading.percentage_loading.toFixed(
          1,
        )} %`,
        powerFactor: item.meter_reading.power_factor.toFixed(3),
        currentTotal: item.meter_reading.current_total.toFixed(2),
        meterStatus: item.meter_reading.meter_status,
      });
    }
    item.sub_meter.map((subMeter) => {
      if (verifyAppTypes.indexOf(subMeter.application_type) !== -1) {
        auxiliaryMeterListDataSet.push({
          key: subMeter.name,
          id: subMeter.id,
          name: subMeter.name,
          details: subMeter.details,
          applicationType: subMeter.application_type,
          applicationCategory:
            subMeter.application_details.application_category,
          percentageLoading: `${subMeter.meter_reading.percentage_loading.toFixed(
            1,
          )} %`,
          powerFactor: subMeter.meter_reading.power_factor.toFixed(3),
          currentTotal: subMeter.meter_reading.current_total.toFixed(2),
          meterStatus: subMeter.meter_reading.meter_status,
        });
      }
      return true;
    });
    return true;
  });

  return auxiliaryMeterListDataSet;
}
/**
 * Meter List Transformer
 * */
export function meterListTransformer(resp) {
  if (!resp) {
    return [];
  }
  return {
    electricalMeterList: electricalMeterList(resp.results),
    auxiliaryMeterList: auxiliaryMeterList(resp.results),
  };
}
