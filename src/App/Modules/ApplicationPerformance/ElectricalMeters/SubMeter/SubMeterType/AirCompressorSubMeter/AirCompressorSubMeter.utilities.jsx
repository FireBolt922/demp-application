import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';
import moment from 'moment';

export const dummyGraphData = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '0.93' },
    { readingAt: '2:58 PM', value: '-0.66' },
    { readingAt: '2:59 PM', value: '-0.47' },
    { readingAt: '3:00 PM', value: '-0.89' },
    { readingAt: '3:01 PM', value: '0.98' },
    { readingAt: '3:02 PM', value: '0.55' },
    { readingAt: '3:03 PM', value: '-0.81' },
    { readingAt: '3:04 PM', value: '-0.72' },
    { readingAt: '3:05 PM', value: '-0.28' },
    { readingAt: '3:06 PM', value: '-0.45' },
    { readingAt: '3:07 PM', value: '-0.48' },
    { readingAt: '3:08 PM', value: '0.56' },
    { readingAt: '3:09 PM', value: '-0.15' },
    { readingAt: '3:10 PM', value: '-0.52' },
    { readingAt: '3:11 PM', value: '-0.55' },
    { readingAt: '3:12 PM', value: '-0.83' },
    { readingAt: '3:13 PM', value: '0.30' },
    { readingAt: '3:14 PM', value: '-0.02' },
    { readingAt: '3:15 PM', value: '-0.18' },
    { readingAt: '3:16 PM', value: '0.72' },
    { readingAt: '3:17 PM', value: '-0.67' },
    { readingAt: '3:18 PM', value: '-0.08' },
    { readingAt: '3:19 PM', value: '-0.52' },
    { readingAt: '3:20 PM', value: '-0.66' },
    { readingAt: '3:21 PM', value: '0.87' },
    { readingAt: '3:22 PM', value: '0.23' },
    { readingAt: '3:23 PM', value: '0.31' },
    { readingAt: '3:24 PM', value: '-0.87' },
    { readingAt: '3:25 PM', value: '-0.21' },
    { readingAt: '3:26 PM', value: '0.90' },
    { readingAt: '3:27 PM', value: '-0.41' },
    { readingAt: '3:28 PM', value: '0.47' },
    { readingAt: '3:29 PM', value: '0.23' },
    { readingAt: '3:30 PM', value: '-0.76' },
    { readingAt: '3:31 PM', value: '-0.98' },
    { readingAt: '3:32 PM', value: '0.85' },
    { readingAt: '3:33 PM', value: '0.18' },
    { readingAt: '3:34 PM', value: '0.59' },
    { readingAt: '3:35 PM', value: '-0.60' },
    { readingAt: '3:36 PM', value: '0.83' },
    { readingAt: '3:37 PM', value: '0.67' },
  ],
};

export const dummyAirCompressorMeterData = {
  applicationType: 5,
  meterReadingStartDate: '2021-02-14T16:52:09+05:30',
  meterName: 'sub meter 4 Air Compressor (Optimun)',
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Percentage Loading', value: '167.77 %' },
        { key: 2, name: 'Power Factor', value: '-0.146' },
        { key: 3, name: 'Current Total', value: '52.8 Amps' },
      ],
    },
  ],
  yesterdaysData: [
    { key: 1, name: 'Energy Consumption', value: '1 kWh' },
    { key: 2, name: 'Energy Cost', value: '₹ 8.15' },
    { key: 3, name: 'GHG Emission', value: '0.001 tCO2' },
    { key: 4, name: 'Percentage Loading', value: '140.8 %' },
    { key: 5, name: 'Max Active Power', value: '599.8 kW' },
    { key: 6, name: 'Max Total Current', value: '99.8 Amps' },
    { key: 7, name: 'Average Power Factor', value: '-0.012' },
    { key: 8, name: 'Running Hours', value: '1 hrs' },
    { key: 9, name: 'Off Hours', value: '23 hrs' },
  ],
  yesterdayMotorAnalysisFirstParamTable: [
    { key: 1, name: 'Percentage Unloading', value: '-40.771 %' },
    { key: 2, name: 'Unloading Hours', value: '-0.578 hrs' },
  ],
  yesterdayMotorAnalysisSecondParamTable: [
    { key: 1, name: 'Energy Loss', value: '-0 kWh' },
    { key: 2, name: 'Monetary Loss', value: '₹ -4' },
  ],
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '11 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 97' },
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
  airCompressorWorkingOnOptimumLoadMessage:
    'Air compressor is Running at Optimum load',
  isAirCompressorWorkingOnOptimumLoad: true,
  runningOptimum: [
    { params: [{ key: 1, name: 'Percentage Loading', value: '98.8 %' }] },
  ],
};

export const dummyAirCompressorMeterData2 = {
  applicationType: 5,
  meterReadingStartDate: '2021-02-14T16:52:09+05:30',
  meterName: 'sub meter 4 Air Compressor (Overload)',
  liveDataSummary: [
    {
      key: 1,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Percentage Loading', value: '167.77 %' },
        { key: 2, name: 'Power Factor', value: '-0.146' },
        { key: 3, name: 'Current Total', value: '52.8 Amps' },
      ],
    },
  ],
  yesterdaysData: [
    { key: 1, name: 'Energy Consumption', value: '1 kWh' },
    { key: 2, name: 'Energy Cost', value: '₹ 8.15' },
    { key: 3, name: 'GHG Emission', value: '0.001 tCO2' },
    { key: 4, name: 'Percentage Loading', value: '140.8 %' },
    { key: 5, name: 'Max Active Power', value: '599.8 kW' },
    { key: 6, name: 'Max Total Current', value: '99.8 Amps' },
    { key: 7, name: 'Average Power Factor', value: '-0.012' },
    { key: 8, name: 'Running Hours', value: '1 hrs' },
    { key: 9, name: 'Off Hours', value: '23 hrs' },
  ],
  yesterdayMotorAnalysisFirstParamTable: [
    { key: 1, name: 'Percentage Unloading', value: '40.771 %' },
    { key: 2, name: 'Unloading Hours', value: '4 hrs' },
  ],
  yesterdayMotorAnalysisSecondParamTable: [
    { key: 1, name: 'Energy Loss', value: '200 kWh' },
    { key: 2, name: 'Monetary Loss', value: '₹ 1400' },
  ],
  monthlyAndTodaysDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Energy Consumption', value: '11 kWh' },
        { key: 2, name: 'Energy Cost', value: '₹ 97' },
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
  airCompressorWorkingOnOptimumLoadMessage:
    'Air compressor is Running at Optimum load',
  isAirCompressorWorkingOnOptimumLoad: false,
  runningOptimum: [
    { params: [{ key: 1, name: 'Percentage Loading', value: '140.8 %' }] },
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

function yesterdayMotorAnalysisFirstParamTable(yesterdayData) {
  const data = [
    {
      key: 1,
      name: 'Percentage Unloading',
      value: `${NumberFormatter(yesterdayData.percentage_unloading.value, 3)} ${
        yesterdayData.percentage_unloading.unit
      }`,
    },
    {
      key: 2,
      name: 'Unloading Hours',
      value: `${NumberFormatter(yesterdayData.unloading_hours.value, 3)} ${
        yesterdayData.unloading_hours.unit
      }`,
    },
  ];
  return data;
}

function yesterdayMotorAnalysisSecondParamTable(yesterdayData) {
  const data = [
    {
      key: 1,
      name: 'Energy Loss',
      value: `${NumberFormatter(yesterdayData.energy_loss.value, 0)} ${
        yesterdayData.energy_loss.unit
      }`,
    },
    {
      key: 2,
      name: 'Monetary Loss',
      value: `${yesterdayData.monetary_loss.unit} ${NumberFormatter(
        yesterdayData.monetary_loss.value,
        0,
      )}`,
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

function runningOptimum(yesterdaysPercentageLoading) {
  const data = [
    {
      params: [
        {
          key: 1,
          name: 'Percentage Loading',
          value: `${NumberFormatter(yesterdaysPercentageLoading.value, 1)} ${
            yesterdaysPercentageLoading.unit
          }`,
        },
      ],
    },
  ];
  return data;
}

export function AirCompressorDataTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    applicationType: resp.application_type,
    meterReadingStartDate: resp.first_sub_meter_reading,
    meterName: resp.meter_name,
    liveDataSummary: liveDataSummary(resp.live_data),
    yesterdaysData: yesterdaysData(resp.yesterdays_data.aggregate_data),
    yesterdayMotorAnalysisFirstParamTable: yesterdayMotorAnalysisFirstParamTable(
      resp.yesterdays_motor_performance_analysis,
    ),
    yesterdayMotorAnalysisSecondParamTable: yesterdayMotorAnalysisSecondParamTable(
      resp.yesterdays_motor_performance_analysis,
    ),
    monthlyAndTodaysDataSummary: monthlyAndTodaysDataSummary(
      resp.monthly_data,
      resp.todays_data,
    ),
    airCompressorWorkingOnOptimumLoadMessage:
      resp.yesterdays_motor_performance_analysis.compressor_optimum_message,
    isAirCompressorWorkingOnOptimumLoad:
      resp.yesterdays_motor_performance_analysis
        .is_compressor_running_on_optimum_load,
    runningOptimum: runningOptimum(
      resp.yesterdays_motor_performance_analysis.percentage_loading,
    ),
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
export function AirCompressorGraphTransformer(resp) {
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
