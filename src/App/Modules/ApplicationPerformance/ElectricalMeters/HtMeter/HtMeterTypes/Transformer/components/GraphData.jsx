import React, { useState } from 'react';
import { Typography, Row, Select } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import LineGraph from 'App/Common/UIComponents/LineGraph';
import {
  GraphSelectCol,
  SelectDropDown,
  ColAlign,
} from '../Transformer.styled';
import { dummyGraphData } from '../Transformer.utilities';
import {
  GRAPH_OPTION,
  POWER_FACTOR,
  KVA,
  VOLTAGE,
  CURRENT,
  KW,
  REACTIVE_POWER,
  VR_HARMONICS,
  VY_HARMONICS,
  VB_HARMONICS,
  IR_HARMONICS,
  IY_HARMONICS,
  IB_HARMONICS,
  R_PHASE_CURRENT,
  Y_PHASE_CURRENT,
  B_PHASE_CURRENT,
} from '../Transformer.constants';

const { Title } = Typography;
const { Option } = Select;
function Graph() {
  const [setParameter] = useState('reading_at,power_factor');
  const [graphTitle, setGraphTitle] = useState('Power Factor');

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
      case `${REACTIVE_POWER.key}`:
        setGraphTitle(REACTIVE_POWER.value);
        break;
      case `${VR_HARMONICS.key}`:
        setGraphTitle(VR_HARMONICS.value);
        break;
      case `${VY_HARMONICS.key}`:
        setGraphTitle(VY_HARMONICS.value);
        break;
      case `${VB_HARMONICS.key}`:
        setGraphTitle(VB_HARMONICS.value);
        break;
      case `${IR_HARMONICS.key}`:
        setGraphTitle(IR_HARMONICS.value);
        break;
      case `${IY_HARMONICS.key}`:
        setGraphTitle(IY_HARMONICS.value);
        break;
      case `${IB_HARMONICS.key}`:
        setGraphTitle(IB_HARMONICS.value);
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
