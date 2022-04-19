import * as React from 'react';
import ReactEcharts from 'echarts-for-react';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { COLORS } from '../Dashboard.constants';
import { dummyGraphData } from '../Dashboard.utilities';

function Graph() {
  const graphResponse = dummyGraphData;
  const time = [];
  const contractDemand = [];
  const presentKva = [];
  graphResponse.map((item) => {
    time.push(item.readingAt);
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
    <ApiSuspense>
      <ReactEcharts
        option={option}
        notMerge
        lazyUpdate
        style={{ height: '400px' }}
      />
    </ApiSuspense>
  );
}
export default Graph;
