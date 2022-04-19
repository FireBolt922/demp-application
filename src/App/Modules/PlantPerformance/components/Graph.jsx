import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
  Line,
} from 'recharts';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { ColPadding } from '../PlantPerformance.styled';
import SectionHeader from './SectionHeader';

function HistoryGraph({ data }) {
  return (
    <Wrapper>
      <ColPadding>
        <SectionHeader name="Graph" />
      </ColPadding>
      <Row>
        <Row>
          <ComposedChart
            width={1100}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="xAxisParam" />
            <YAxis yAxisId="right" orientation="right" dataKey="yAxisParam" />
            <Tooltip />
            <Legend />
            <Bar
              name="Energy Consumption"
              type="monotype"
              dataKey="xAxisParam"
              barSize={50}
              fill="#FF6384"
            />
            <Line
              yAxisId="right"
              name="Max Demand"
              type="monotone"
              dataKey="yAxisParam"
              strokeWidth="2px"
            />
          </ComposedChart>
        </Row>
      </Row>
    </Wrapper>
  );
}
HistoryGraph.prototype = {
  data: PropTypes.string.isRequired,
};
export default HistoryGraph;
