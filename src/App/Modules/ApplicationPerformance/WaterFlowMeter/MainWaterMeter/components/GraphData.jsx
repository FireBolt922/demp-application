import React from 'react';
import { Typography, Row } from 'antd';
import PropTypes from 'prop-types';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import LineGraph from 'App/Common/UIComponents/LineGraph';
import { ColAlign } from '../MainWaterMeter.styled';
import { graphResponse } from '../MainWaterMeter.utilities';

const { Title } = Typography;
function Graph() {
  const graphTitle = 'Water Flow,M³/hr';

  return (
    <div>
      <Row>
        <ColAlign span={8} offset={8} align="center">
          <Title level={5}>Live Graph</Title>
        </ColAlign>
      </Row>
      <ApiSuspense>
        <Row>
          {graphResponse.results ? (
            <LineGraph data={graphResponse.results} lineName={graphTitle} />
          ) : null}
        </Row>
      </ApiSuspense>
    </div>
  );
}
Graph.protoTypes = {
  meterId: PropTypes.string.isRequired,
};
export default Graph;
