import React from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import {
  MiniBox,
  ParameterText,
  ParameterDigit,
} from '../PlantPerformanceHistory.styled';

function ParameterBox({ label, value }) {
  return (
    <MiniBox>
      <Space>
        <ParameterText>
          <strong>{label}</strong>
        </ParameterText>
        <ParameterDigit>{value}</ParameterDigit>
      </Space>
    </MiniBox>
  );
}

ParameterBox.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default ParameterBox;
