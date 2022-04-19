import * as React from 'react';
import { Empty } from 'antd';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { COLORS } from '../HomePage.constants';

function ZoomGraph({ selectedParams }) {
  const time = [];
  const contractDemand = [];
  const presentKva = [];
  selectedParams.graphData.map((item) => {
    time.push(item.time);
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
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
          title: '',
        },
        saveAsImage: { title: 'Save' },
      },
    },
    axisPointer: {
      link: { xAxisIndex: 'all' },
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 65,
        end: 100,
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 100,
      },
    ],
    grid: [
      {
        left: 50,
        right: 50,
      },
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: time,
    },
    yAxis: {
      type: 'value',
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
  return (
    <>
      {selectedParams.graphData.length > 0 ? (
        <ReactEcharts
          option={option}
          notMerge
          lazyUpdate
          style={{ height: '400px', width: '100%' }}
        />
      ) : (
        <Empty />
      )}
    </>
  );
}
ZoomGraph.propTypes = {
  selectedParams: PropTypes.object.isRequired,
};
export default ZoomGraph;
