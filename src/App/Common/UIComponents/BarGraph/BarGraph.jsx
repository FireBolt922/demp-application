import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

function BarLineGraph({ data, barName }) {
  const xAxisParam = [];
  const timestamp = [];

  data.map((item) => {
    xAxisParam.push(item.xAxisParam);
    timestamp.push(item.timestamp);
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
      data: [barName],
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
        data: timestamp,
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: barName,
        type: 'bar',
        data: xAxisParam,
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
BarLineGraph.prototype = {
  data: PropTypes.string.isRequired,
  barName: PropTypes.string.isRequired,
};
export default BarLineGraph;
