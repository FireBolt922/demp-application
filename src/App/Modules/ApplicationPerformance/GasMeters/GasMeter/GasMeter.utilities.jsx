import moment from 'moment';
import React from 'react';
import { Col } from 'antd';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

export const dummyGraphData = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '17.45' },
    { readingAt: '2:58 PM', value: '13.44' },
    { readingAt: '2:59 PM', value: '6.33' },
    { readingAt: '3:00 PM', value: '19.68' },
    { readingAt: '3:01 PM', value: '17.13' },
    { readingAt: '3:02 PM', value: '10.12' },
    { readingAt: '3:03 PM', value: '11.55' },
    { readingAt: '3:04 PM', value: '7.87' },
    { readingAt: '3:05 PM', value: '14.58' },
    { readingAt: '3:06 PM', value: '19.61' },
    { readingAt: '3:07 PM', value: '16.08' },
    { readingAt: '3:08 PM', value: '11.22' },
    { readingAt: '3:09 PM', value: '8.92' },
    { readingAt: '3:10 PM', value: '9.96' },
    { readingAt: '3:11 PM', value: '19.41' },
    { readingAt: '3:12 PM', value: '15.30' },
    { readingAt: '3:13 PM', value: '12.15' },
    { readingAt: '3:14 PM', value: '8.99' },
    { readingAt: '3:15 PM', value: '19.09' },
    { readingAt: '3:16 PM', value: '19.36' },
    { readingAt: '3:17 PM', value: '12.82' },
    { readingAt: '3:18 PM', value: '14.48' },
    { readingAt: '3:19 PM', value: '16.58' },
    { readingAt: '3:20 PM', value: '16.68' },
    { readingAt: '3:21 PM', value: '18.93' },
    { readingAt: '3:22 PM', value: '12.52' },
    { readingAt: '3:23 PM', value: '14.51' },
    { readingAt: '3:24 PM', value: '14.91' },
    { readingAt: '3:25 PM', value: '19.77' },
    { readingAt: '3:26 PM', value: '9.76' },
    { readingAt: '3:27 PM', value: '17.57' },
    { readingAt: '3:28 PM', value: '9.13' },
    { readingAt: '3:29 PM', value: '9.23' },
    { readingAt: '3:30 PM', value: '6.80' },
    { readingAt: '3:31 PM', value: '18.69' },
    { readingAt: '3:32 PM', value: '15.07' },
    { readingAt: '3:33 PM', value: '16.52' },
    { readingAt: '3:34 PM', value: '9.69' },
    { readingAt: '3:35 PM', value: '10.58' },
    { readingAt: '3:36 PM', value: '15.02' },
    { readingAt: '3:37 PM', value: '8.33' },
  ],
};
export const dummyGasMeterData = {
  firstGasMeterReading: '2021-05-25T19:37:32.258759+05:30',
  meterName: 'gas flow meter 1',
  gasFlowMeterId: 1,
  isMeterProducing: true,
  mererName: 'gas flow meter 1',
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Gas Consumption', value: '11,353 kg' },
        { key: 2, name: 'Gas Cost', value: '₹ 22,706' },
      ],
    },
    {
      key: 2,
      title: 'Todays Data',
      params: [
        { key: 1, name: 'Gas Consumption', value: '934 kg' },
        { key: 2, name: 'Gas Cost', value: '₹ 1,868' },
      ],
    },
  ],
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Volumetric Flow', value: '8.3 SCM/hr' },
        { key: 2, name: 'Mass Flow', value: '1 m3/hr' },
        {
          key: 3,
          name: 'Temperature',
          value: '25',
        },
      ],
    },
  ],
  yesterdaysData: [
    { key: 1, name: 'Gas Consumption', value: '976 kg' },
    { key: 2, name: 'Gas Cost', value: '₹ 1,952' },
    { key: 3, name: 'Gas in TOE', value: '1.07' },
    { key: 4, name: 'Gas in kCal/Day', value: '1,07,36,000' },
    { key: 5, name: 'Running Hour', value: '1.52 hrs' },
    { key: 6, name: 'Off Hour', value: '22.48 hrs' },
    {
      key: 7,
      name: 'AVG Temperature',
      value: 30,
    },
    { key: 8, name: 'AVG Pressure', value: '1 bar' },
    { key: 9, name: 'AVG Density', value: '6 kg/m3' },
    { key: 10, name: 'GHG Emission', value: '1.708 tCO2' },
    { key: 11, name: 'Per Hour Consumption', value: '644 kg' },
    { key: 12, name: 'TOE Share', value: '99.953 %' },
  ],
  kpi: [
    {
      key: 1,
      title: 'Key Performance Indicators',
      params: [
        { key: 1, name: 'Specific Energy Consumption', value: '0 kg/kgs' },
        { key: 2, name: 'Specific Energy Cost', value: '0 ₹/kgs' },
        { key: 3, name: 'Specific Emission', value: '0 tCO2/kgs' },
      ],
    },
  ],
};

function temperatureUnit(value, unit) {
  if (unit === 'celsius') {
    return <Col>{value} &deg;C</Col>;
  }
  if (unit === 'fahrenheit') {
    return <Col>{value} F</Col>;
  }
  if (unit === 'kelvin') {
    return <Col>{value} K</Col>;
  }
  return false;
}
function monthlyAndTodaysDataSummary(monthlyData, todaysData) {
  const data = [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        {
          key: 1,
          name: 'Gas Consumption',
          value: `${NumberFormatter(monthlyData.gas_consumption.value, 0)} ${
            monthlyData.gas_consumption.unit
          }`,
        },
        {
          key: 2,
          name: 'Gas Cost',
          value: `${monthlyData.gas_energy_cost.unit} ${NumberFormatter(
            monthlyData.gas_energy_cost.value,
            0,
          )}`,
        },
      ],
    },
    {
      key: 2,
      title: 'Todays Data',
      params: [
        {
          key: 1,
          name: 'Gas Consumption',
          value: `${NumberFormatter(todaysData.gas_consumption.value, 0)} ${
            todaysData.gas_consumption.unit
          }`,
        },
        {
          key: 2,
          name: 'Gas Cost',
          value: `${todaysData.gas_energy_cost.unit} ${NumberFormatter(
            todaysData.gas_energy_cost.value,
            0,
          )}`,
        },
      ],
    },
  ];
  return data;
}
function liveDataSummary(liveData) {
  const data = [
    {
      key: 1,
      title: 'Live Data',
      params: [
        {
          key: 1,
          name: 'Volumetric Flow',
          value: `${NumberFormatter(liveData.volumetric_flow.value, 1)} ${
            liveData.volumetric_flow.unit
          }`,
        },
        {
          key: 2,
          name: 'Mass Flow',
          value: `${NumberFormatter(liveData.mass_flow.value, 1)} ${
            liveData.mass_flow.unit
          }`,
        },
        {
          key: 3,
          name: 'Temperature',
          value: temperatureUnit(
            NumberFormatter(liveData.temperature.value, 1),
            liveData.temperature.unit,
          ),
        },
      ],
    },
  ];
  return data;
}
function yesterdaysData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Gas Consumption',
      value: `${NumberFormatter(data.gas_consumption.value, 0)} ${
        data.gas_consumption.unit
      }`,
    },
    {
      key: 2,
      name: 'Gas Cost',
      value: `${data.gas_energy_cost.unit} ${NumberFormatter(
        data.gas_energy_cost.value,
        0,
      )}`,
    },
    {
      key: 3,
      name: 'Gas in TOE',
      value: `${NumberFormatter(data.gas_energy_in_toe, 2)}`,
    },
    {
      key: 4,
      name: 'Gas in kCal/Day',
      value: `${NumberFormatter(data.energy_in_kcal, 2)}`,
    },
    {
      key: 5,
      name: 'Running Hour',
      value: `${NumberFormatter(data.meter_hours.running_hours.value, 2)} ${
        data.meter_hours.running_hours.unit
      }`,
    },
    {
      key: 6,
      name: 'Off Hour',
      value: `${NumberFormatter(data.meter_hours.off_hours.value, 2)} ${
        data.meter_hours.off_hours.unit
      }`,
    },
    {
      key: 7,
      name: 'AVG Temperature',
      value: temperatureUnit(
        NumberFormatter(data.average_temperature.value, 0),
        data.average_temperature.unit,
      ),
    },
    {
      key: 8,
      name: 'AVG Pressure',
      value: `${NumberFormatter(data.average_pressure.value, 0)} ${
        data.average_pressure.unit
      }`,
    },
    {
      key: 9,
      name: 'AVG Density',
      value: `${NumberFormatter(data.average_density.value, 0)} ${
        data.average_density.unit
      }`,
    },
    {
      key: 10,
      name: 'GHG Emission',
      value: `${NumberFormatter(data.gas_ghg_emission.value, 3)} ${
        data.gas_ghg_emission.unit
      }`,
    },
    {
      key: 11,
      name: 'Per Hour Consumption',
      value: `${NumberFormatter(data.per_hour_consumption.value, 0)} ${
        data.per_hour_consumption.unit
      }`,
    },
    {
      key: 12,
      name: 'TOE Share',
      value: `${NumberFormatter(data.gas_meter_toe_share.value, 3)} ${
        data.gas_meter_toe_share.unit
      }`,
    },
  ];
  return dataSet;
}
function kpi(data) {
  if (data.gas_key_performance_indicators.specific_gas_energy_consumption) {
    const dataSet = [
      {
        key: 1,
        title: 'Key Performance Indicators',
        params: [
          {
            key: 1,
            name: 'Specific Energy Consumption',
            value: `${NumberFormatter(
              data.gas_key_performance_indicators
                .specific_gas_energy_consumption.value,
              1,
            )} ${
              data.gas_key_performance_indicators
                .specific_gas_energy_consumption.unit
            }`,
          },
          {
            key: 2,
            name: 'Specific Energy Cost',
            value: `${NumberFormatter(
              data.gas_key_performance_indicators.specific_gas_energy_cost
                .value,
              1,
            )} ${
              data.gas_key_performance_indicators.specific_gas_energy_cost.unit
            }`,
          },
          {
            key: 3,
            name: 'Specific Emission',
            value: `${NumberFormatter(
              data.gas_key_performance_indicators.specific_gas_energy_emission
                .value,
              1,
            )} ${
              data.gas_key_performance_indicators.specific_gas_energy_emission
                .unit
            }`,
          },
        ],
      },
    ];
    return dataSet;
  }
  return false;
}
export function gasMeterTransformer(resp) {
  if (!resp) {
    return [];
  }

  return {
    firstGasMeterReading: resp.first_ht_meter_reading,
    meterName: resp.gas_flow_meter_name,
    gasFlowMeterId: resp.gas_flow_meter_id,
    isMeterProducing: resp.is_meter_producing,
    mererName: resp.gas_flow_meter_name,
    monthlyAndTodaysDataSummary: monthlyAndTodaysDataSummary(
      resp.monthly_data,
      resp.todays_data,
    ),
    liveDataSummary: liveDataSummary(resp.latest_data),
    yesterdaysData: yesterdaysData(resp.yesterdays_data),
    kpi: kpi(resp.yesterdays_data),
  };
}

/*
 * Used for Graph
 * Input {reading_at:2020-11-24T11:20:05.480184Z, value:number}
 * Output [{reading_at:10:00:00 AM, value:number}]
 */
function dynamicGraphValues(data) {
  return data.reverse().map((items) => {
    return {
      readingAt: moment(items.reading_at).format('LT'),
      value: items[Object.keys(items)[1]].toFixed(2),
    };
  });
}
export function gasMeterGraphTransformer(resp) {
  if (!resp) {
    return [];
  }
  return {
    count: resp.count,
    next: resp.next,
    previous: resp.previous,
    results: dynamicGraphValues(resp.results),
  };
}
