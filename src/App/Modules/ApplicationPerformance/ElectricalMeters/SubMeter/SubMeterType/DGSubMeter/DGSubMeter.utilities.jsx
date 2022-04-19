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

export const dummyDGMeterData = {
  applicationType: 2,
  meterName: 'Sub Meter 2 DG',
  DGDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Energy Generation', value: '11 kWh' },
        { key: 2, name: 'Diesel Cost', value: '₹ 2,162 ' },
        { key: 3, name: 'Running Hours', value: '15.67 hrs' },
        { key: 4, name: 'Diesel Consumption', value: '1,081 Litre' },
      ],
    },
    {
      key: 2,
      title: "Today's Data",
      params: [
        { key: 1, name: 'Energy Generation', value: '1 kWh' },
        { key: 2, name: 'Diesel Cost', value: '₹ 16 ' },
        { key: 3, name: 'Running Hours', value: '0.12 hrs' },
        { key: 4, name: 'Diesel Consumption', value: '8 Litre' },
      ],
    },
  ],
  DGYesterdaysData: [
    { key: 1, name: 'Energy Generation', value: '1 kWh' },
    { key: 2, name: 'Energy Cost', value: ' 197 ₹/kWh' },
    { key: 3, name: 'Running Hours', value: '1.42 hrs' },
    { key: 4, name: 'Diesel Consumption', value: '97.75 Litre' },
    { key: 5, name: 'Diesel Cost', value: ' ₹ 196' },
    { key: 6, name: 'Power Factor', value: '0.028 ' },
    { key: 7, name: 'GHG Emission', value: '0.001 tCO2' },
    { key: 8, name: 'Lube Oil Consumption', value: '0 Litre' },
    { key: 9, name: 'Energy in TOE', value: '0' },
  ],
  meterReadingStartDate: '2021-02-14T16:52:09+05:30',
};

function DGYesterdaysData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Energy Generation',
      value: `${NumberFormatter(data.energy_generation.value, 0)} ${
        data.energy_generation.unit
      }`,
    },
    {
      key: 2,
      name: 'Energy Cost',
      value: ` ${NumberFormatter(data.dg_energy_cost.value, 0)} ${
        data.dg_energy_cost.unit
      }`,
    },
    {
      key: 3,
      name: 'Running Hours',
      value: `${NumberFormatter(data.running_hours.value, 2)} ${
        data.running_hours.unit
      }`,
    },
    {
      key: 4,
      name: 'Diesel Consumption',
      value: `${NumberFormatter(data.diesel_consumption.value, 2)} ${
        data.diesel_consumption.unit
      }`,
    },
    {
      key: 5,
      name: 'Diesel Cost',
      value: ` ${data.diesel_cost.unit} ${NumberFormatter(
        data.diesel_cost.value,
        0,
      )}`,
    },
    {
      key: 6,
      name: 'Power Factor',
      value: `${NumberFormatter(data.power_factor, 3)} `,
    },
    {
      key: 7,
      name: 'GHG Emission',
      value: `${NumberFormatter(data.ghg_emission.value, 3)} ${
        data.ghg_emission.unit
      }`,
    },
    {
      key: 8,
      name: 'Lube Oil Consumption',
      value: `${NumberFormatter(data.lube_oil_consumption.value, 2)} ${
        data.lube_oil_consumption.unit
      }`,
    },
    {
      key: 9,
      name: 'Energy in TOE',
      value: `${NumberFormatter(data.energy_in_toe, 3)}`,
    },
  ];
  return dataSet;
}

function DGDataSummary(monthlyData, latestData) {
  const data = [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        {
          key: 1,
          name: 'Energy Generation',
          value: `${NumberFormatter(monthlyData.energy_generation.value)} ${
            monthlyData.energy_generation.unit
          }`,
        },
        {
          key: 2,
          name: 'Diesel Cost',
          value: `${monthlyData.diesel_cost.unit} ${NumberFormatter(
            monthlyData.diesel_cost.value,
          )} `,
        },
        {
          key: 3,
          name: 'Running Hours',
          value: `${NumberFormatter(monthlyData.running_hours.value, 2)} ${
            monthlyData.running_hours.unit
          }`,
        },
        {
          key: 4,
          name: 'Diesel Consumption',
          value: `${NumberFormatter(monthlyData.diesel_consumption.value)} ${
            monthlyData.diesel_consumption.unit
          }`,
        },
      ],
    },
    {
      key: 2,
      title: "Today's Data",
      params: [
        {
          key: 1,
          name: 'Energy Generation',
          value: `${NumberFormatter(latestData.energy_generation.value)} ${
            latestData.energy_generation.unit
          }`,
        },
        {
          key: 2,
          name: 'Diesel Cost',
          value: `${monthlyData.diesel_cost.unit} ${NumberFormatter(
            latestData.diesel_cost.value,
          )} `,
        },
        {
          key: 3,
          name: 'Running Hours',
          value: `${NumberFormatter(latestData.running_hours.value, 2)} ${
            latestData.running_hours.unit
          }`,
        },
        {
          key: 4,
          name: 'Diesel Consumption',
          value: `${NumberFormatter(latestData.diesel_consumption.value)} ${
            latestData.diesel_consumption.unit
          }`,
        },
      ],
    },
  ];
  return data;
}

export function DGSubMeterData(resp) {
  if (!resp) {
    return {};
  }
  return {
    applicationType: resp.application_type,
    meterName: resp.meter_name,
    DGDataSummary: DGDataSummary(resp.monthly_data, resp.live_data),
    DGYesterdaysData: DGYesterdaysData(resp.yesterdays_data),
    meterReadingStartDate: resp.first_sub_meter_reading,
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
export function DGSubMeterGraphTransformer(resp) {
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
