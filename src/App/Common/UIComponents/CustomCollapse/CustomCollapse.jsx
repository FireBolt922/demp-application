import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import './CustomCollapse.css';

const StyledCollapse = styled(Collapse)`
  &&& {
    border: 0;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: none;
  }
`;
const CustomCollapse = ({ header, body }) => {
  const [disabled, setDisabled] = useState(true);
  return (
    <StyledCollapse onChange={() => setDisabled((prev) => !prev)}>
      <Collapse.Panel
        header={<strong>{header}</strong>}
        key="1"
        showArrow={false}
        bordered={false}
        extra={
          <span>
            <span
              style={{
                color: '#0076DE',
                float: 'right',
              }}
            >
              {disabled ? <DownOutlined /> : <UpOutlined />}
            </span>
          </span>
        }
      >
        {body}
      </Collapse.Panel>
    </StyledCollapse>
  );
};
CustomCollapse.prototype = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default CustomCollapse;
