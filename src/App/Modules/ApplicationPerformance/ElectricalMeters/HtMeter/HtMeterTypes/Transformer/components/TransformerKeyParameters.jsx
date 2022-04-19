import React from 'react';
import { Row, Statistic } from 'antd';
import PropTypes from 'prop-types';
import { RoundBox, ColPadding } from '../Transformer.styled';

function TransformerKeyParameters({ transformerKeyParameters }) {
  return (
    <Row>
      <ColPadding span={6}>
        <RoundBox justifyCenter color="#7fca7b">
          <Statistic
            title="Saving Potential "
            value={transformerKeyParameters.savingPotential}
          />
        </RoundBox>
      </ColPadding>
      <ColPadding span={6}>
        <RoundBox justifyCenter color="#7fca7b">
          <Statistic
            title="Monetary Saving"
            value={transformerKeyParameters.monetarySaving}
          />
        </RoundBox>
      </ColPadding>
      <ColPadding span={6}>
        <RoundBox justifyCenter color="#d53636">
          <Statistic
            title="Energy Loss"
            value={transformerKeyParameters.energyLoss}
          />
        </RoundBox>
      </ColPadding>
      <ColPadding span={6}>
        <RoundBox justifyCenter color="#d53636">
          <Statistic
            title="Monetary Loss"
            value={transformerKeyParameters.monetaryLoss}
          />
        </RoundBox>
      </ColPadding>
    </Row>
  );
}
TransformerKeyParameters.protoTypes = {
  transformerKeyParameters: PropTypes.object.isRequired,
};
export default TransformerKeyParameters;
