import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import {
  MiniBox,
  ParamBoxLabel,
  ParamBoxValue,
} from 'App/Common/UIComponents/ParamBox/ParamBox.styled';

function ParamBox({ label, value }) {
  return (
    <MiniBox>
      <Col>
        <ParamBoxLabel>
          <strong>{label}</strong>
        </ParamBoxLabel>
      </Col>
      <Col>
        <ParamBoxValue>{value}</ParamBoxValue>
        <Col />
      </Col>
    </MiniBox>
  );
}

ParamBox.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default ParamBox;
