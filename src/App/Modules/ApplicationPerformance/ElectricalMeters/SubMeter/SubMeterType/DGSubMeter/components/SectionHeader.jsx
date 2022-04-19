import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

function SectionHeader({ name }) {
  return (
    <Row>
      <Col span={24}>
        <Title level={5}>{name}</Title>
      </Col>
    </Row>
  );
}
SectionHeader.protoTypes = {
  name: PropTypes.string.isRequired,
};

export default SectionHeader;
