import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';

const { Text } = Typography;

function DataProperty({ name, value }) {
  return (
    <Row>
      <Col span={12}>{name}</Col>
      <Col span={12}>
        <Text strong>{value}</Text>
      </Col>
    </Row>
  );
}

DataProperty.protoTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DataProperty;
