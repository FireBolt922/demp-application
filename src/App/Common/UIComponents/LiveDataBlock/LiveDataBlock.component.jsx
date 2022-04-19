import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import ParamBox from 'App/Common/UIComponents/ParamBox';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { DividerPadding, CustomTitle } from './LiveDataBlock.styled';

function LiveDataBlock({ title, data }) {
  return (
    <div>
      <Wrapper>
        <Row>
          <Col span={24}>
            <CustomTitle level={5}>{title}</CustomTitle>
          </Col>
          <DividerPadding />
          {data.map((items) => {
            return (
              <Col span={8} key={items.key}>
                <ParamBox label={items.name} value={items.value} />
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    </div>
  );
}

LiveDataBlock.protoTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
export default LiveDataBlock;
