import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

function BarLineGraph({ data, barName, lineName }) {
  const xAxisParam = [];
  const yAxisParam = [];
  const timestamp = [];
  data.map((item) => {
    xAxisParam.push(item.xAxisParam);
    yAxisParam.push(item.yAxisParam);
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
      data: [barName, lineName],
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
        name: barName,
      },
      {
        type: 'value',
        name: lineName,
      },
    ],
    series: [
      {
        name: barName,
        type: 'bar',
        data: xAxisParam,
      },
      {
        name: lineName,
        type: 'line',
        showSymbol: false,
        itemStyle: {
          color: '#42aeef',
        },
        yAxisIndex: 1,
        data: yAxisParam,
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
  lineName: PropTypes.string.isRequired,
};
export default BarLineGraph;
