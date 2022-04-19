import moment from 'moment';
import React from 'react';
import { Col } from 'antd';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

export const dummyGraphData = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '8.25' },
    { readingAt: '2:58 PM', value: '19.38' },
    { readingAt: '2:59 PM', value: '13.66' },
    { readingAt: '3:00 PM', value: '13.43' },
    { readingAt: '3:01 PM', value: '9.26' },
    { readingAt: '3:02 PM', value: '17.39' },
    { readingAt: '3:03 PM', value: '12.29' },
    { readingAt: '3:04 PM', value: '16.05' },
    { readingAt: '3:05 PM', value: '9.16' },
    { readingAt: '3:06 PM', value: '7.01' },
    { readingAt: '3:07 PM', value: '16.09' },
    { readingAt: '3:08 PM', value: '5.71' },
    { readingAt: '3:09 PM', value: '19.69' },
    { readingAt: '3:10 PM', value: '16.82' },
    { readingAt: '3:11 PM', value: '9.99' },
    { readingAt: '3:12 PM', value: '8.87' },
    { readingAt: '3:13 PM', value: '6.89' },
    { readingAt: '3:14 PM', value: '8.29' },
    { readingAt: '3:15 PM', value: '10.04' },
    { readingAt: '3:16 PM', value: '16.15' },
    { readingAt: '3:17 PM', value: '16.11' },
    { readingAt: '3:18 PM', value: '13.20' },
    { readingAt: '3:19 PM', value: '14.70' },
    { readingAt: '3:20 PM', value: '11.80' },
    { readingAt: '3:21 PM', value: '13.15' },
    { readingAt: '3:22 PM', value: '14.40' },
    { readingAt: '3:23 PM', value: '18.23' },
    { readingAt: '3:24 PM', value: '19.38' },
    { readingAt: '3:25 PM', value: '9.56' },
    { readingAt: '3:26 PM', value: '18.20' },
    { readingAt: '3:27 PM', value: '11.34' },
    { readingAt: '3:28 PM', value: '7.38' },
    { readingAt: '3:29 PM', value: '8.57' },
    { readingAt: '3:30 PM', value: '16.22' },
    { readingAt: '3:31 PM', value: '7.52' },
    { readingAt: '3:32 PM', value: '16.78' },
    { readingAt: '3:33 PM', value: '14.34' },
    { readingAt: '3:34 PM', value: '6.92' },
    { readingAt: '3:35 PM', value: '16.64' },
    { readingAt: '3:36 PM', value: '9.44' },
    { readingAt: '3:37 PM', value: '17.31' },
  ],
};

export const dummySubGasMeterData = {
  firstGasMeterReading: '2021-05-25T19:57:46.909971+05:30',
  meterName: 'sub gas flow meter 1',
  gasFlowMeterId: 1,
  isMeterProducing: true,
  mererName: 'sub gas flow meter 1',
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Gas Consumption', value: '11,293 kg' },
        { key: 2, name: 'Gas Cost', value: '₹ 22,586' },
      ],
    },
    {
      key: 2,
      title: 'Todays Data',
      params: [
        { key: 1, name: 'Gas Consumption', value: '884 kg' },
        { key: 2, name: 'Gas Cost', value: '₹ 1,768' },
      ],
    },
  ],
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Volumetric Flow', value: '17.3 kg/hr' },
        { key: 2, name: 'Mass Flow', value: '3.9 kg/hr' },
        {
          key: 3,
          name: 'Temperature',
          value: 30,
        },
      ],
    },
  ],
  yesterdaysData: [
    { key: 1, name: 'Gas Consumption', value: '972 kg' },
    { key: 2, name: 'Gas Cost', value: '₹ 1,944' },
    { key: 3, name: 'Gas in TOE', value: '0' },
    { key: 4, name: 'Gas in kCal/Day', value: '0' },
    { key: 5, name: 'Running Hour', value: '1.48 hrs' },
    { key: 6, name: 'Off Hour', value: '22.52 hrs' },
    {
      key: 7,
      name: 'AVG Temperature',
      value: 30,
    },
    { key: 8, name: 'AVG Pressure', value: '2 bar' },
    { key: 9, name: 'AVG Density', value: '6 kg/m3' },
    { key: 10, name: 'GHG Emission', value: '0 tCO2' },
    { key: 11, name: 'Per Hour Consumption', value: '655 kg' },
    { key: 12, name: 'TOE Share', value: '0 %' },
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
export function defaultGasMeterTransformer(resp) {
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
export function defaultGasMeterGraphTransformer(resp) {
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
