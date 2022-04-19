import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import {
  DividerPadding,
  CustomText,
  CustomTextForValue,
} from './CustomTableStyled';

function CustomTable({ tableData }) {
  return (
    <>
      {tableData.map((item) => {
        return (
          <Row key={item.key}>
            <Col span={12}>{item.name}</Col>
            <CustomTextForValue span={12}>
              <CustomText
                color={
                  item.name === 'Energy Loss' || item.name === 'Monetary Loss'
                    ? 'red'
                    : null
                }
                strong
              >
                {item.value}
              </CustomText>
            </CustomTextForValue>
            <DividerPadding />
          </Row>
        );
      })}
    </>
  );
}
CustomTable.protoTypes = {
  tableData: PropTypes.string.isRequired,
};
export default CustomTable;
