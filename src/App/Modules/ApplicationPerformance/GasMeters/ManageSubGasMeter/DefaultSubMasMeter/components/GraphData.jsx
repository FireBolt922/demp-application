import React, { useState } from 'react';
import { Typography, Row, Select } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import LineGraph from 'App/Common/UIComponents/LineGraph';
import {
  GraphSelectCol,
  SelectDropDown,
  ColAlign,
} from '../DefaultSubGasMeter.styled';
import {
  GRAPH_OPTION,
  VOLUMETRIC_FLOW,
  MASS_FLOW,
  DENSITY,
  TEMPERATURE,
  PRESSURE,
} from '../DefaultSubGasMeter.constants';
import { dummyGraphData } from '../DefaultSubGasMeter.utilities';

const { Title } = Typography;
const { Option } = Select;
function Graph() {
  const [, setParameter] = useState('reading_at,volumetric_flow');
  const [graphTitle, setGraphTitle] = useState('Volumetric Flow');

  function onChange(value) {
    setParameter(`reading_at,${value}`);

    switch (value) {
      case `${VOLUMETRIC_FLOW.key}`:
        setGraphTitle(VOLUMETRIC_FLOW.value);
        break;
      case `${MASS_FLOW.key}`:
        setGraphTitle(MASS_FLOW.value);
        break;
      case `${DENSITY.key}`:
        setGraphTitle(DENSITY.value);
        break;
      case `${TEMPERATURE.key}`:
        setGraphTitle(TEMPERATURE.value);
        break;
      case `${PRESSURE.key}`:
        setGraphTitle(PRESSURE.value);
        break;
      default:
        setGraphTitle(VOLUMETRIC_FLOW.value);
    }
  }
  // Getting Query Params from response URL

  return (
    <div>
      <Row>
        <ColAlign span={8} offset={8} align="center">
          <Title level={5}>Live Graph</Title>
        </ColAlign>
        <GraphSelectCol span={8}>
          <SelectDropDown
            onChange={onChange}
            placeholder="Select"
            id="dropdown"
          >
            {GRAPH_OPTION.map((item) => {
              return (
                <Option key={item.key} value={item.value}>
                  {item.field}
                </Option>
              );
            })}
          </SelectDropDown>
        </GraphSelectCol>
      </Row>
      <ApiSuspense>
        <Row>
          {dummyGraphData.results ? (
            <LineGraph data={dummyGraphData.results} lineName={graphTitle} />
          ) : null}
        </Row>
      </ApiSuspense>
    </div>
  );
}

export default Graph;
