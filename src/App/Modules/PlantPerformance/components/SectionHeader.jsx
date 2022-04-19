import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { CustomTitle } from '../PlantPerformance.styled';

function SectionHeader({ name }) {
  return (
    <Row>
      <Col span={24}>
        <CustomTitle level={5}>{name}</CustomTitle>
      </Col>
    </Row>
  );
}

SectionHeader.protoTypes = {
  name: PropTypes.string.isRequired,
};

export default SectionHeader;
