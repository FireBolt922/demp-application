import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';

function ParamBox({ label, value }) {
  return (
    <Statistic
      valueStyle={{ fontSize: '20px' }}
      title={<strong>{label}</strong>}
      value={value}
    />
  );
}

ParamBox.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default ParamBox;
