import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { COLOR_PALETTES } from 'theme';

function BarChart({ data, title }) {
  const legendData = [];
  data.map((item) => {
    legendData.push(item.name);
    return null;
  });

  const dataSet = data.map((item) => {
    return {
      name: item.name,
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      data: [Number(item.percentageShare)],
    };
  });

  const option = {
    title: {
      text: `${title}`,
      subtext: `Energy Resources, toe`,
      subtextStyle: {
        fontWeight: 'bold',
      },
      left: 'center',
      textStyle: {
        fontSize: '16px',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      type: `${data.length > 4 ? 'scroll' : 'plain'}`,
      data: legendData,
      top: 'bottom',
    },
    grid: { show: false, left: 15, right: 15, top: 50 },
    xAxis: {
      type: 'value',
      show: false,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      show: false,
      data: [''],
      splitLine: {
        show: false,
      },
    },
    series: dataSet,
    graph: {
      color: COLOR_PALETTES,
    },
  };
  return (
    <ReactEcharts option={option} style={{ height: '150px', width: '100%' }} />
  );
}
BarChart.protoTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default BarChart;
