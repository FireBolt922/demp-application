import React from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { ParameterText, ParameterDigit } from '../HtMeterHistory.styled';

function ParameterBox({ label, value }) {
  return (
    <Space>
      <ParameterText>
        <strong>{label}</strong>
      </ParameterText>
      <ParameterDigit>{value}</ParameterDigit>
    </Space>
  );
}

ParameterBox.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default ParameterBox;
