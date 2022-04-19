import moment from 'moment';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';

function energyParameters(data) {
  const dataSet = [
    {
      key: 1,
      params: 'Solar Energy Generation',
      value: `${NumberFormatter(data.energy_generation.value, 0)} ${
        data.energy_generation.unit
      }`,
    },
    {
      key: 2,
      params: 'Peak Power Generated',
      value: `${NumberFormatter(data.max_active_power.value, 1)} ${
        data.max_active_power.unit
      }`,
    },
    {
      key: 3,
      params: 'Emission Reduced',
      value: `${NumberFormatter(data.ghg_emission.value, 3)} ${
        data.ghg_emission.unit
      }`,
    },
    {
      key: 4,
      params: 'Energy Cost Saved',
      value: `${data.energy_cost.unit} ${NumberFormatter(
        data.energy_cost.value,
        0,
      )}`,
    },
    {
      key: 5,
      params: 'Energy in TOE',
      value: `${NumberFormatter(data.energy_in_toe, 1)}`,
    },
    {
      key: 6,
      params: 'Trees Planted',
      value: `${NumberFormatter(data.trees_planted, 1)}`,
    },
    {
      key: 7,
      params: 'Solar Share in Plant Consumption',
      value: `${NumberFormatter(data.solar_share_consumption.value, 1)} ${
        data.solar_share_consumption.unit
      }`,
    },
    {
      key: 8,
      params: 'Sun Hours',
      value: `${NumberFormatter(data.running_hours.value, 0)} ${
        data.running_hours.unit
      }`,
    },
  ];
  return dataSet;
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
        };
      })
    : resp.graph_data.map((items) => {
        return {
          timestamp: moment(items.timestamp).format('DD-MM-YYYY'),
          xAxisParam: items.x_axis_param,
        };
      });
}

function applicationEnergyPerformance(data) {
  const dataSet = [
    {
      key: 1,
      name: 'Minimum Energy Generation',
      value: `${NumberFormatter(data.min_energy_consumption.value, 0)} ${
        data.min_energy_consumption.unit
      }`,
    },
    {
      key: 2,
      name: `Maximum Energy Generation`,
      value: `${NumberFormatter(data.max_energy_consumption.value, 0)} ${
        data.max_energy_consumption.unit
      }`,
    },
    {
      key: 3,
      name: `Average Energy Generation`,
      value: `${NumberFormatter(data.avg_energy_consumption.value, 0)} ${
        data.avg_energy_consumption.unit
      }`,
    },
  ];
  return dataSet;
}

export function SolarSubMeterHistoryTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    meterName: resp.sub_meter_name,
    fromDate: resp.from_date,
    toDate: resp.to_date,
    energyParameters: energyParameters(resp),
    graphData: graphData(resp),
    applicationEnergyPerformance: applicationEnergyPerformance(
      resp.application_energy_performance,
    ),
  };
}
