import moment from 'moment';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

export const dummyGraphData = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '0.36' },
    { readingAt: '2:58 PM', value: '0.10' },
    { readingAt: '2:59 PM', value: '-0.44' },
    { readingAt: '3:00 PM', value: '-0.15' },
    { readingAt: '3:01 PM', value: '0.48' },
    { readingAt: '3:02 PM', value: '-0.60' },
    { readingAt: '3:03 PM', value: '0.01' },
    { readingAt: '3:04 PM', value: '0.97' },
    { readingAt: '3:05 PM', value: '-0.76' },
    { readingAt: '3:06 PM', value: '-0.42' },
    { readingAt: '3:07 PM', value: '0.17' },
    { readingAt: '3:08 PM', value: '0.16' },
    { readingAt: '3:09 PM', value: '0.53' },
    { readingAt: '3:10 PM', value: '-0.03' },
    { readingAt: '3:11 PM', value: '-0.23' },
    { readingAt: '3:12 PM', value: '-0.01' },
    { readingAt: '3:13 PM', value: '0.03' },
    { readingAt: '3:14 PM', value: '0.90' },
    { readingAt: '3:15 PM', value: '-0.33' },
    { readingAt: '3:16 PM', value: '-0.03' },
    { readingAt: '3:17 PM', value: '-0.24' },
    { readingAt: '3:18 PM', value: '-0.42' },
    { readingAt: '3:19 PM', value: '0.61' },
    { readingAt: '3:20 PM', value: '-0.10' },
    { readingAt: '3:21 PM', value: '0.83' },
    { readingAt: '3:22 PM', value: '-0.88' },
    { readingAt: '3:23 PM', value: '-0.97' },
    { readingAt: '3:24 PM', value: '0.45' },
    { readingAt: '3:25 PM', value: '-0.62' },
    { readingAt: '3:26 PM', value: '-0.57' },
    { readingAt: '3:27 PM', value: '0.10' },
    { readingAt: '3:28 PM', value: '0.60' },
    { readingAt: '3:29 PM', value: '-0.43' },
    { readingAt: '3:30 PM', value: '0.05' },
    { readingAt: '3:31 PM', value: '0.96' },
    { readingAt: '3:32 PM', value: '0.22' },
    { readingAt: '3:33 PM', value: '0.46' },
    { readingAt: '3:34 PM', value: '-0.55' },
    { readingAt: '3:35 PM', value: '0.04' },
    { readingAt: '3:36 PM', value: '0.24' },
    { readingAt: '3:37 PM', value: '-0.70' },
  ],
};

export const dummyHtMeterData = {
  meterName: 'ht meter 1',
  readingStartAt: '2021-02-14T16:52:09+05:30',
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '11 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 98 ' },
      ],
    },
    {
      key: 1,
      title: 'Todays Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '0 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 0' },
      ],
    },
  ],
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Percentage Loading', value: '143.73 %' },
        { key: 2, name: 'Power Factor', value: '0.708' },
        { key: 3, name: 'Current Total', value: '-0.64 Amps' },
      ],
    },
  ],
  yesterdaysTransformerAnalysis: {
    transformerData: [
      {
        key: 0,
        loadCondition: 'MIN',
        kvaLoading: '100.63',
        percentageLoading: '28.75 %',
        fixedLosses: '853.73',
        percentageLoss: '43,691.31',
      },
      {
        key: 1,
        loadCondition: 'MAX',
        kvaLoading: '598.54',
        percentageLoading: '171.01 %',
        fixedLosses: '1,160.65',
        percentageLoss: '59,398.56',
      },
      {
        key: 2,
        loadCondition: 'AVG',
        kvaLoading: '342.79',
        percentageLoading: '97.94 %',
        fixedLosses: '948.4',
        percentageLoss: '48,536.28',
      },
    ],
    transformerKeyParameters: {
      savingPotential: '1,161 kWh',
      monetarySaving: '₹ 9,981',
      energyLoss: '1,161 kWh',
      monetaryLoss: '₹ 9,982',
    },
  },
  yesterdaysAnalysisOfPFAndReactiveEnergy: {
    firstTable: [
      { key: 1, name: 'Reactive Energy', value: '1.94 KVAH' },
      { key: 2, name: 'Energy Loss', value: '-0 kWh' },
      { key: 3, name: 'RKVAH (LEAD)', value: '1.98' },
      { key: 4, name: 'Capacitor Size (LEAD)', value: '0.08 KVAR' },
    ],
    secondTable: [
      { key: 1, name: 'Actual Power Factor', value: '1.009' },
      { key: 2, name: 'Monetary Loss', value: '₹ -0' },
      { key: 3, name: 'RKVAH (LAG)', value: '2.03' },
      { key: 4, name: 'Capacitor Size (LAG)', value: '0.08 KVAR' },
    ],
  },
  aggregateData: [
    { key: 1, name: 'Energy Consumption', value: '2 kWh' },
    { key: 2, name: 'Energy Cost', value: '₹ 17' },
    { key: 3, name: 'GHG Emission', value: '0 tCO2' },
    { key: 4, name: 'Peak Demand', value: '598.54 kVA' },
    { key: 5, name: 'Average Demand', value: '342.79 kVA' },
    { key: 6, name: 'Current Harmonics - Athd', value: '46.18 %' },
    { key: 7, name: 'Voltage Harmonics - Vthd', value: '45.56 %' },
    { key: 8, name: 'Current Unbalance', value: '0.15 %' },
  ],
};

function transformerData(data) {
  const dataset = data.map((items, index) => {
    return {
      key: index,
      loadCondition: `${items.load_condition.toUpperCase()}`,
      kvaLoading: `${NumberFormatter(items.kva_loading, 2)}`,
      percentageLoading: `${NumberFormatter(items.percentage_loading, 2)} %`,
      fixedLosses: `${NumberFormatter(items.fixed_losses, 2)}`,
      percentageLoss: `${NumberFormatter(items.percentage_loss, 2)}`,
    };
  });
  return dataset;
}
function firstTableData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Reactive Energy',
      value: `${NumberFormatter(data.reactive_energy.value, 2)} ${
        data.reactive_energy.unit
      }`,
    },
    {
      key: 2,
      name: 'Energy Loss',
      value: `${NumberFormatter(data.energy_loss.value, 0)} ${
        data.energy_loss.unit
      }`,
    },
    {
      key: 3,
      name: 'RKVAH (LEAD)',
      value: `${NumberFormatter(data.rkvah_lead, 2)}`,
    },
    {
      key: 4,
      name: 'Capacitor Size (LEAD)',
      value: `${NumberFormatter(data.capacitor_size_lead.value, 2)} ${
        data.capacitor_size_lead.unit
      }`,
    },
  ];
  return dataSet;
}
function secondTableData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Actual Power Factor',
      value: `${NumberFormatter(data.actual_power_factor, 3)}`,
    },
    {
      key: 2,
      name: 'Monetary Loss',
      value: `${data.monetary_loss.unit} ${NumberFormatter(
        data.monetary_loss.value,
        0,
      )}`,
    },
    {
      key: 3,
      name: 'RKVAH (LAG)',
      value: `${NumberFormatter(data.rkvah_lag, 2)}`,
    },
    {
      key: 4,
      name: 'Capacitor Size (LAG)',
      value: `${NumberFormatter(data.capacitor_size_lag.value, 2)} ${
        data.capacitor_size_lag.unit
      }`,
    },
  ];
  return dataSet;
}
function yesterdaysData(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Energy Consumption',
      value: `${NumberFormatter(data.energy_consumption.value, 0)} ${
        data.energy_consumption.unit
      }`,
    },
    {
      key: 2,
      name: 'Energy Cost',
      value: `${data.energy_cost.unit} ${NumberFormatter(
        data.energy_cost.value,
        0,
      )}`,
    },
    {
      key: 3,
      name: 'GHG Emission',
      value: `${NumberFormatter(data.ghg_emission.value, 2)} ${
        data.ghg_emission.unit
      }`,
    },
    {
      key: 4,
      name: 'Peak Demand',
      value: `${NumberFormatter(data.peak_demand.value, 2)} ${
        data.peak_demand.unit
      }`,
    },
    {
      key: 5,
      name: 'Average Demand',
      value: `${NumberFormatter(data.average_demand.value, 2)} ${
        data.average_demand.unit
      }`,
    },
    {
      key: 6,
      name: 'Current Harmonics - Athd',
      value: `${NumberFormatter(data.current_harmonics_athd.value, 2)} ${
        data.current_harmonics_athd.unit
      }`,
    },
    {
      key: 7,
      name: 'Voltage Harmonics - Vthd',
      value: `${NumberFormatter(data.voltage_harmonics_vthd.value, 2)} ${
        data.voltage_harmonics_vthd.unit
      }`,
    },
    {
      key: 8,
      name: 'Current Unbalance',
      value: `${NumberFormatter(data.current_unbalance.value, 2)} ${
        data.current_unbalance.unit
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
          )} `,
        },
      ],
    },
    {
      key: 1,
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

function transformerKeyParametersData(data) {
  // Added absolute function for each value
  const dataSet = {
    savingPotential: `${NumberFormatter(
      Math.abs(data.saving_potential.value),
      0,
    )} ${data.saving_potential.unit}`,
    monetarySaving: `${data.monetary_saving.unit} ${NumberFormatter(
      Math.abs(data.monetary_saving.value),
      0,
    )}`,
    energyLoss: `${NumberFormatter(Math.abs(data.energy_loss.value), 0)} ${
      data.energy_loss.unit
    }`,
    monetaryLoss: `${data.monetary_loss.unit} ${NumberFormatter(
      Math.abs(data.monetary_loss.value),
      0,
    )}`,
  };
  return dataSet;
}
export function defaultTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    meterName: resp.ht_meter_name,
    readingStartAt: resp.first_ht_meter_reading,
    monthlyAndTodaysDataSummary: monthlyAndTodaysDataSummary(
      resp.monthly_data,
      resp.todays_data,
    ),
    liveDataSummary: liveDataSummary(resp.latest_data),
    yesterdaysTransformerAnalysis: {
      transformerData: transformerData(
        resp.yesterdays_data.transformer_analysis.transformer_data,
      ),
      transformerKeyParameters: transformerKeyParametersData(
        resp.yesterdays_data.transformer_analysis,
      ),
    },
    yesterdaysAnalysisOfPFAndReactiveEnergy: {
      firstTable: firstTableData(resp.yesterdays_data.pf_analysis),
      secondTable: secondTableData(resp.yesterdays_data.pf_analysis),
    },
    aggregateData: yesterdaysData(resp.yesterdays_data.aggregate_data),
  };
}
/*
 * Used for Graph
 * Input {reading_at:2020-11-24T11:20:05.480184Z, value:number}
 * Output [{reading_at:10:00:00 AM, value:number}]
 */
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
export function HtMeterGraphTransformer(resp) {
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
