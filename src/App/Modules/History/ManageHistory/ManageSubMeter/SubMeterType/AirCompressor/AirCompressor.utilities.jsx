import moment from 'moment';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

function energyParameters(data) {
  const dataSet = [
    {
      key: 1,
      params: 'Energy Consumption',
      value: `${NumberFormatter(data.energy_consumption.value, 0)}  ${
        data.energy_consumption.unit
      }`,
    },
    {
      key: 2,
      params: 'Average Active Power',
      value: `${NumberFormatter(data.avg_active_power.value, 1)} ${
        data.avg_active_power.unit
      }`,
    },
    {
      key: 3,
      params: 'Average Demand Total',
      value: `${NumberFormatter(data.avg_demand_total.value, 1)} ${
        data.avg_demand_total.unit
      }`,
    },
    {
      key: 4,
      params: 'GHG Emission',
      value: `${NumberFormatter(data.ghg_emission.value, 3)}  ${
        data.ghg_emission.unit
      }`,
    },
    {
      key: 5,
      params: 'Energy Cost',
      value: `${data.energy_cost.unit} ${NumberFormatter(
        data.energy_cost.value,
        0,
      )}`,
    },
    {
      key: 6,
      params: 'Average Power Factor',
      value: `${NumberFormatter(data.avg_power_factor, 3)}`,
    },
    {
      key: 7,
      params: 'Run Hours',
      value: `${NumberFormatter(data.running_hours.value, 0)} ${
        data.running_hours.unit
      }`,
    },
    {
      key: 8,
      params: 'Percentage Loading',
      value: `${NumberFormatter(data.percentage_loading.value, 1)} ${
        data.percentage_loading.unit
      }`,
    },
  ];
  return dataSet;
}

function motorHistoryAnalysis(data) {
  let dataSet;
  if (data.is_compressor_running_on_optimum_load) {
    dataSet = [
      {
        key: 1,
        name: 'Percentage Unloading',
        value: `${NumberFormatter(data.percentage_unloading.value, 3)} ${
          data.percentage_unloading.unit
        }`,
      },
      {
        key: 2,
        name: 'Unloading Hours',
        value: `${NumberFormatter(data.unloading_hours.value, 3)} ${
          data.unloading_hours.unit
        }`,
      },
    ];
  } else {
    dataSet = [
      {
        key: 1,
        name: 'Percentage Unloading',
        value: `${NumberFormatter(data.percentage_unloading.value, 3)} ${
          data.percentage_unloading.unit
        }`,
      },
      {
        key: 2,
        name: 'Unloading Hours',
        value: `${NumberFormatter(data.unloading_hours.value, 3)} ${
          data.unloading_hours.unit
        }`,
      },
      {
        key: 3,
        name: 'Energy Loss',
        value: `${NumberFormatter(data.energy_loss.value, 0)} ${
          data.energy_loss.unit
        }`,
      },
      {
        key: 4,
        name: 'Monetary Loss',
        value: `${data.monetary_loss.unit} ${NumberFormatter(
          data.monetary_loss.value,
          0,
        )}`,
      },
    ];
  }

  return dataSet;
}

function graphProducingOrNot(data) {
  if (!data) {
    return [];
  }
  const producing = {
    barName: `kWh/${data.sub_meter_production_unit}`,
    lineName: 'kWh',
  };
  const nonProducing = {
    barName: 'kWh',
    lineName: 'kVA',
  };
  return data.production_availability === true ? producing : nonProducing;
}

function graphData(resp) {
  if (!resp) {
    return [];
  }
  return resp.multiple_day === false
    ? resp.graph_data.map((items) => {
        return {
          timestamp: moment(items.timestamp).format('HH'),
          xAxisParam: items.x_axis_param,
          yAxisParam: items.y_axis_param,
        };
      })
    : resp.graph_data.map((items) => {
        return {
          timestamp: moment(items.timestamp).format('DD-MM-YYYY'),
          xAxisParam: items.x_axis_param,
          yAxisParam: items.y_axis_param,
        };
      });
}
function checkOptimumLoad(data) {
  if (data.is_compressor_running_on_optimum_load) {
    return { state: true, message: data.compressor_optimum_message };
  }
  return { state: false, message: data.compressor_optimum_message };
}
export function AirCompressorSubMeterHistoryTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    meterName: resp.sub_meter_name,
    fromDate: resp.from_date,
    toDate: resp.to_date,
    energyParameters: energyParameters(resp),
    graphData: graphData(resp),
    graphTitle: graphProducingOrNot(resp),
    motorHistoryAnalysis: motorHistoryAnalysis(resp.motor_history_analysis),
    isOptimumLoad: checkOptimumLoad(resp.motor_history_analysis),
  };
}
