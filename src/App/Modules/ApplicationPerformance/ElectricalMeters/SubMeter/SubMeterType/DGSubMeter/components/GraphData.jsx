import React, { useState } from 'react';
import LineGraph from 'App/Common/UIComponents/LineGraph';
import { Typography, Row, Col, Select } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { GraphSelectCol, SelectDropDown, ColAlign } from '../DGSubMeter.styled';
import {
  GRAPH_OPTION,
  POWER_FACTOR,
  KVA,
  VOLTAGE,
  CURRENT,
  KW,
  R_PHASE_CURRENT,
  Y_PHASE_CURRENT,
  B_PHASE_CURRENT,
} from '../DGSubMeter.constants';
import { dummyGraphResponse } from '../DGSubMeter.utilities';

const { Title } = Typography;
const { Option } = Select;
function Graph() {
  const [setParameter] = useState('reading_at,power_factor');
  const [graphTitle, setGraphTitle] = useState('Power Factor');
  // Default page Number
  function onChange(value) {
    setParameter(`reading_at,${value}`);

    switch (value) {
      case `${POWER_FACTOR.key}`:
        setGraphTitle(POWER_FACTOR.value);
        break;
      case `${KVA.key}`:
        setGraphTitle(KVA.value);
        break;
      case `${VOLTAGE.key}`:
        setGraphTitle(VOLTAGE.value);
        break;
      case `${CURRENT.key}`:
        setGraphTitle(CURRENT.value);
        break;
      case `${KW.key}`:
        setGraphTitle(KW.value);
        break;
      case `${R_PHASE_CURRENT.key}`:
        setGraphTitle(R_PHASE_CURRENT.value);
        break;
      case `${Y_PHASE_CURRENT.key}`:
        setGraphTitle(Y_PHASE_CURRENT.value);
        break;
      case `${B_PHASE_CURRENT.key}`:
        setGraphTitle(B_PHASE_CURRENT.value);
        break;
      default:
        setGraphTitle(POWER_FACTOR.value);
    }
  }
  // Getting Query Params from response URL

  return (
    <Col span={24}>
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
          {dummyGraphResponse.results ? (
            <LineGraph
              data={dummyGraphResponse.results}
              lineName={graphTitle}
            />
          ) : null}
        </Row>
      </ApiSuspense>
    </Col>
  );
}

export default Graph;
