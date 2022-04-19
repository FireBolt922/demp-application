import moment from 'moment';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

export const dummyGraphResponse = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '-0.42' },
    { readingAt: '2:58 PM', value: '0.56' },
    { readingAt: '2:59 PM', value: '0.91' },
    { readingAt: '3:00 PM', value: '0.27' },
    { readingAt: '3:01 PM', value: '-0.14' },
    { readingAt: '3:02 PM', value: '-0.55' },
    { readingAt: '3:03 PM', value: '-0.54' },
    { readingAt: '3:04 PM', value: '0.45' },
    { readingAt: '3:05 PM', value: '0.23' },
    { readingAt: '3:06 PM', value: '0.19' },
    { readingAt: '3:07 PM', value: '0.64' },
    { readingAt: '3:08 PM', value: '0.52' },
    { readingAt: '3:09 PM', value: '-0.29' },
    { readingAt: '3:10 PM', value: '0.97' },
    { readingAt: '3:11 PM', value: '-0.65' },
    { readingAt: '3:12 PM', value: '-0.62' },
    { readingAt: '3:13 PM', value: '-0.18' },
    { readingAt: '3:14 PM', value: '-0.32' },
    { readingAt: '3:15 PM', value: '0.72' },
    { readingAt: '3:16 PM', value: '-0.93' },
    { readingAt: '3:17 PM', value: '-0.32' },
    { readingAt: '3:18 PM', value: '-0.39' },
    { readingAt: '3:19 PM', value: '-0.14' },
    { readingAt: '3:20 PM', value: '-0.63' },
    { readingAt: '3:21 PM', value: '-0.17' },
    { readingAt: '3:22 PM', value: '0.73' },
    { readingAt: '3:23 PM', value: '-0.94' },
    { readingAt: '3:24 PM', value: '-0.89' },
    { readingAt: '3:25 PM', value: '0.53' },
    { readingAt: '3:26 PM', value: '-0.47' },
    { readingAt: '3:27 PM', value: '0.98' },
    { readingAt: '3:28 PM', value: '0.87' },
    { readingAt: '3:29 PM', value: '0.81' },
    { readingAt: '3:30 PM', value: '0.02' },
    { readingAt: '3:31 PM', value: '-0.49' },
    { readingAt: '3:32 PM', value: '-0.11' },
    { readingAt: '3:33 PM', value: '0.41' },
    { readingAt: '3:34 PM', value: '0.89' },
    { readingAt: '3:35 PM', value: '-0.78' },
    { readingAt: '3:36 PM', value: '0.58' },
    { readingAt: '3:37 PM', value: '0.02' },
  ],
};

export const dummySubMeterData = {
  application_type: 1,
  meterReadingStartDate: '2021-02-14T16:52:09+05:30',
  meter_name: 'Sub Meter 1 Default',
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Percentage Loading', value: '120.91 %' },
        { key: 2, name: 'Power Factor', value: '-0.145' },
        { key: 3, name: 'Current Total', value: '40.25 Amps' },
      ],
    },
  ],
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '11 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 96' },
      ],
    },
    {
      key: 2,
      title: 'Todays Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '1 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 6' },
      ],
    },
  ],
  yesterdaysData: [
    { key: 1, name: 'Energy Consumption', value: '1 kWh' },
    { key: 2, name: 'Energy Cost', value: '₹ 8.85' },
    { key: 3, name: 'GHG Emission', value: '0.001 tCO2' },
    { key: 4, name: 'Percentage Loading', value: '143.8 %' },
    { key: 5, name: 'Max Active Power', value: '599.4 kW' },
    { key: 6, name: 'Max Total Current', value: '99.4 Amps' },
    { key: 7, name: 'Average Power Factor', value: '-0.062' },
    { key: 8, name: 'Running Hours', value: '1 hrs' },
    { key: 9, name: 'Off Hours', value: '23 hrs' },
  ],
};

function yesterdaysData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Energy Consumption',
      value: `${NumberFormatter(data.energy_consumption.value)} ${
        data.energy_consumption.unit
      }`,
    },
    {
      key: 2,
      name: 'Energy Cost',
      value: `${data.energy_cost.unit} ${NumberFormatter(
        data.energy_cost.value,
        2,
      )}`,
    },
    {
      key: 3,
      name: 'GHG Emission',
      value: `${NumberFormatter(data.ghg_emission.value, 3)} ${
        data.ghg_emission.unit
      }`,
    },
    {
      key: 4,
      name: 'Percentage Loading',
      value: `${NumberFormatter(data.percentage_loading.value, 1)} ${
        data.percentage_loading.unit
      }`,
    },
    {
      key: 5,
      name: 'Max Active Power',
      value: `${NumberFormatter(data.max_active_power.value, 1)} ${
        data.max_active_power.unit
      }`,
    },
    {
      key: 6,
      name: 'Max Total Current',
      value: `${NumberFormatter(data.max_total_current.value, 1)} ${
        data.max_total_current.unit
      }`,
    },
    {
      key: 7,
      name: 'Average Power Factor',
      value: `${NumberFormatter(data.avg_power_factor, 3)}`,
    },
    {
      key: 8,
      name: 'Running Hours',
      value: `${NumberFormatter(data.running_hours.value, 0)} ${
        data.running_hours.unit
      }`,
    },
    {
      key: 9,
      name: 'Off Hours',
      value: `${NumberFormatter(data.off_hours.value, 0)} ${
        data.off_hours.unit
      }`,
    },
  ];
  return dataSet;
}

function monthlyAndTodaysDataSummary(monthlyData, todaysData) {
  const data = [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        {
          key: 1,
          name: 'Energy Consumption',
          value: `${NumberFormatter(monthlyData.energy_consumption.value, 0)} ${
            monthlyData.energy_consumption.unit
          }`,
        },
        {
          key: 2,
          name: 'Energy Cost',
          value: `${monthlyData.energy_cost.unit} ${NumberFormatter(
            monthlyData.energy_cost.value,
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
          name: 'Energy Consumption',
          value: `${NumberFormatter(todaysData.energy_consumption.value, 0)} ${
            todaysData.energy_consumption.unit
          }`,
        },
        {
          key: 2,
          name: 'Energy Cost',
          value: `${todaysData.energy_cost.unit} ${NumberFormatter(
            todaysData.energy_cost.value,
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
          name: 'Percentage Loading',
          value: `${NumberFormatter(liveData.percentage_loading.value, 2)} ${
            liveData.percentage_loading.unit
          }`,
        },
        {
          key: 2,
          name: 'Power Factor',
          value: `${NumberFormatter(liveData.power_factor, 3)}`,
        },
        {
          key: 3,
          name: 'Current Total',
          value: `${NumberFormatter(liveData.current_total.value, 2)} ${
            liveData.current_total.unit
          }`,
        },
      ],
    },
  ];
  return data;
}

export function SubMeterData(resp) {
  if (!resp) {
    return {};
  }

  return {
    application_type: resp.application_type,
    meterReadingStartDate: resp.first_sub_meter_reading,
    meter_name: resp.meter_name,
    liveDataSummary: liveDataSummary(resp.latest_data),
    monthlyAndTodaysDataSummary: monthlyAndTodaysDataSummary(
      resp.monthly_data,
      resp.todays_data,
    ),
    yesterdaysData: yesterdaysData(resp.yesterdays_data),
  };
}

function dynamicGraphValues(data) {
  return data.reverse().map((items) => {
    if (items.demand_total) {
      // divided by 1000 for KVA
      const demandTotal = items[Object.keys(items)[1]] / 1000;
      return {
        readingAt: moment(items.reading_at).format('LT'),
        value: demandTotal.toFixed(2),
      };
    }
    if (items.active_power) {
      // divided by 1000 for Active Power
      const activePower = items[Object.keys(items)[1]] / 1000;
      return {
        readingAt: moment(items.reading_at).format('LT'),
        value: activePower.toFixed(2),
      };
    }
    return {
      readingAt: moment(items.reading_at).format('LT'),
      value: items[Object.keys(items)[1]].toFixed(2),
    };
  });
}
export function SubMeterGraphTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    count: resp.count,
    next: resp.next,
    previous: resp.previous,
    results: dynamicGraphValues(resp.results),
  };
}
