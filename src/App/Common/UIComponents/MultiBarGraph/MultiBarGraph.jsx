import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

function BarLineGraph({ data, firstBarName, secondBarName }) {
  const xAxisParam1 = [];
  const xAxisParam2 = [];
  const timestamp = [];

  data.map((item) => {
    xAxisParam1.push(item.xAxisParam1);
    xAxisParam2.push(item.xAxisParam2);
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
      data: [firstBarName, secondBarName],
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
        name: firstBarName,
        type: 'bar',
        data: xAxisParam1,
      },
      {
        name: secondBarName,
        type: 'bar',
        data: xAxisParam2,
        itemStyle: {
          color: '#42aeef',
        },
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
  firstBarName: PropTypes.string.isRequired,
  secondBarName: PropTypes.string.isRequired,
};
export default BarLineGraph;
