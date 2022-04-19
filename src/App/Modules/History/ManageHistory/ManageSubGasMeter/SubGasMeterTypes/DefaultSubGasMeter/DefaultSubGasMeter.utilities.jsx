import moment from 'moment';
import NumberFormatter from 'App/Common/Functionalities/NumberFormatter/NumberFormatter';
import React from 'react';
import { Col } from 'antd';

function temperatureUnit(value, unit) {
  switch (unit) {
    case 'celsius':
      return <Col>{value} &deg;C</Col>;
    case 'fahrenheit':
      return <Col>{value} F</Col>;
    case 'kelvin':
      return <Col>{value} K</Col>;
    default:
      return false;
  }
}

function aggregateData(data) {
  return [
    {
      key: 1,
      params: 'Gas Consumption',
      value: `${NumberFormatter(data.gas_consumption.value, 0)} ${
        data.gas_consumption.unit
      }`,
    },
    {
      key: 2,
      params: 'Gas Cost',
      value: `${data.gas_energy_cost.unit} ${NumberFormatter(
        data.gas_energy_cost.value,
        0,
      )}`,
    },
    {
      key: 3,
      params: 'Gas Energy in kCal',
      value: `${NumberFormatter(data.energy_in_kcal, 0)}`,
    },
    {
      key: 4,
      params: 'Running Hours',
      value: `${NumberFormatter(data.meter_hours.running_hours.value, 0)} ${
        data.meter_hours.running_hours.unit
      }`,
    },
    {
      key: 5,
      params: 'Off Hours',
      value: `${NumberFormatter(data.meter_hours.off_hours.value, 0)} ${
        data.meter_hours.off_hours.unit
      }`,
    },
    {
      key: 6,
      params: 'GHG Emission',
      value: `${NumberFormatter(data.gas_ghg_emission.value, 2)} ${
        data.gas_ghg_emission.unit
      }`,
    },
    {
      key: 7,
      params: 'AVG Temperature',
      value: temperatureUnit(
        NumberFormatter(data.average_temperature.value, 1),
        data.average_temperature.unit,
      ),
    },
    {
      key: 8,
      params: 'AVG Pressure',
      value: `${NumberFormatter(data.average_pressure.value, 0)} ${
        data.average_pressure.unit
      }`,
    },
    {
      key: 9,
      params: 'AVG Density',
      value: `${NumberFormatter(data.average_density.value, 0)} ${
        data.average_density.unit
      }`,
    },
  ];
}
function kpi(data) {
  if (data.is_meter_producing) {
    return [
      {
        key: 1,
        title: 'Key Performance Indicators',
        params: [
          {
            key: 1,
            name: 'Specific Gas Energy Consumption',
            value: `${NumberFormatter(
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_consumption.value,
              0,
            )} ${
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_consumption.unit
            }`,
          },
          {
            key: 2,
            name: 'Specific Gas Energy Cost',
            value: `${NumberFormatter(
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_cost.value,
              0,
            )} ${
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_cost.unit
            }`,
          },
          {
            key: 3,
            name: 'Specific Gas Energy Emission',
            value: `${NumberFormatter(
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_emission.value,
              0,
            )} ${
              data.gas_meter_parameters.gas_key_performance_indicators
                .specific_gas_energy_emission.unit
            }`,
          },
        ],
      },
    ];
  }
  return false;
}
function graphData(data) {
  return data.multiple_day === false
    ? data.graph_data.map((items) => {
        return {
          timestamp: moment(items.timestamp).format('HH'),
          xAxisParam: items.gas_consumption,
        };
      })
    : data.graph_data.map((items) => {
        return {
          timestamp: moment(items.timestamp).format('DD-MM-YYYY'),
          xAxisParam: items.gas_consumption,
        };
      });
}
export function subGasMeterHistoryTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    subGasMeterId: resp.gas_flow_meter_id,
    subGasMeterName: resp.gas_flow_meter_name,
    meterUnit: resp.gas_meter_parameters.gas_consumption.unit,
    fromDate: resp.from_date,
    toDate: resp.to_date,
    isMeterProducing: resp.is_meter_producing,
    aggregateData: aggregateData(resp.gas_meter_parameters),
    kpi: kpi(resp),
    multipleDays: resp.multiple_day,
    productionAvailability: resp.production_availability,
    graphData: graphData(resp),
    note: resp.note,
  };
}
