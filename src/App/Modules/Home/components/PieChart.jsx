import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { COLOR_PALETTES } from 'theme';

function PieChart({ data, title, totalValue }) {
  function dataSet() {
    return data.map((items) => {
      return {
        name: items.name,
        value: items.percentageShare,
        value1: items.value,
      };
    });
  }
  const option = {
    title: {
      text: `${title}`,
      subtext: `Total Consumption - ${totalValue} kWh`,
      subtextStyle: {
        fontWeight: 'bold',
        color: '#00AEEF',
      },
      left: 'center',
      textStyle: {
        fontSize: '16px',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: function abc(params) {
        return `
              Department : <b>${params.name}</b><br/>
              % Share: <b>${params.data.value}</b><br/>
              kWh : <b>${params.data.value1}</b><br />
              `;
      },
      position: 'inside',
    },
    legend: {
      type: `${data.length > 4 ? 'scroll' : 'plain'}`,
      bottom: '0%',
      left: 'center',
      textStyle: {
        fontSize: '12',
      },
    },
    series: [
      {
        name: 'Department',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        color: COLOR_PALETTES,
        itemStyle: {
          borderRadius: 2,
          borderColor: '#fff',
          borderWidth: 4,
        },
        label: {
          show: false,
          position: 'center',
          formatter: function test(params) {
            return `${params.value} %`;
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: dataSet(),
      },
    ],
  };
  return (
    <ReactEcharts option={option} style={{ height: '366px', width: '100%' }} />
  );
}
PieChart.protoTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};
export default PieChart;
