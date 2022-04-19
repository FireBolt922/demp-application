import * as React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
import { COLORS } from '../HomePage.constants';

function Graph({ graphData, dataLength }) {
  const time = [];
  const contractDemand = [];
  const presentKva = [];
  graphData.map((item) => {
    time.push(moment(item.time).format('hh:mm A'));
    contractDemand.push(item.contractDemand);
    presentKva.push(item.averageDemand);
    return true;
  });
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: [
        {
          name: 'Contract Demand',
        },
        {
          name: 'Present kVA',
        },
      ],
      bottom: '5%',
    },

    axisPointer: {
      link: { xAxisIndex: 'all' },
    },
    grid: [
      {
        left: 15,
        right: 15,
        top: 2,
        bottom: 50,
      },
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: time,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        name: 'Contract Demand',
        type: 'line',
        itemStyle: {
          color: COLORS[2],
        },
        data: contractDemand,
      },
      {
        name: 'Present kVA',
        type: 'line',
        showSymbol: false,
        data: presentKva,
        itemStyle: {
          width: 0,
          color: COLORS[0],
        },
        lineStyle: {
          width: 1,
        },
        areaStyle: {
          color: COLORS[1],
        },
        emphasis: {
          itemStyle: {
            color: COLORS[0],
          },
        },
      },
    ],
  };
  let graphHeight;
  if (dataLength > 1) {
    graphHeight = '120px';
  } else {
    graphHeight = '180px';
  }
  return (
    <ReactEcharts
      option={option}
      notMerge
      lazyUpdate
      style={{ height: `${graphHeight}` }}
    />
  );
}
Graph.propTypes = {
  graphData: PropTypes.array.isRequired,
  dataLength: PropTypes.string.isRequired,
};

export default Graph;
