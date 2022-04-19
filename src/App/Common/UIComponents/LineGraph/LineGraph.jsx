import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

function LineGraph({ data, lineName }) {
  const readingAt = [];
  const value = [];
  data.map((item) => {
    readingAt.push(item.readingAt);
    value.push(item.value);
    return true;
  });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        link: { xAxisIndex: 'all' },
      },
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true, title: 'Save' },
      },
    },
    legend: {
      data: [lineName],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: readingAt,
      },
    ],
    yAxis: [
      {
        type: 'value',
        beginAtZero: true,
      },
    ],
    series: [
      {
        name: lineName,
        type: 'line',
        showSymbol: false,
        itemStyle: {
          color: '#42aeef',
        },
        data: value,
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      notMerge
      lazyUpdate
      style={{ height: '400px', width: '100%' }}
    />
  );
}
LineGraph.prototype = {
  data: PropTypes.string.isRequired,
  barName: PropTypes.string.isRequired,
  lineName: PropTypes.string.isRequired,
};
export default LineGraph;
