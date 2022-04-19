import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import {
  DividerPadding,
  CustomTitle,
  CustomCol,
  CustomValue,
} from './MeterBlock.styled';

function MeterBlock(parameterReceived) {
  return (
    <Row>
      {parameterReceived.parameter
        ? parameterReceived.parameter.map((item) => {
            return (
              <>
                <CustomCol
                  span={parameterReceived.parameter.length === 1 ? 24 : 12}
                  align="center"
                  key={item.key}
                >
                  <Wrapper>
                    <CustomTitle level={5}>{item.title}</CustomTitle>

                    <Row>
                      {item.params.map((items) => {
                        if (item.params.length === 1) {
                          return (
                            <Col
                              span={
                                parameterReceived.parameter.length === 1
                                  ? 24
                                  : 12
                              }
                              key={items.key}
                            >
                              <CustomValue span={24} fontSize="14px">
                                <strong>{items.name}</strong>
                              </CustomValue>
                              <CustomValue span={24} fontSize="20px">
                                {items.value}
                              </CustomValue>
                            </Col>
                          );
                        }
                        return (
                          <Col
                            span={
                              parameterReceived.parameter.length === 1 ? 8 : 12
                            }
                            key={items.key}
                          >
                            <DividerPadding />
                            <CustomValue span={24} fontSize="14px">
                              <strong>{items.name}</strong>
                            </CustomValue>
                            <CustomValue span={24} fontSize="20px">
                              {items.value}
                            </CustomValue>
                          </Col>
                        );
                      })}
                    </Row>
                  </Wrapper>
                </CustomCol>
              </>
            );
          })
        : null}
    </Row>
  );
}
MeterBlock.protoTypes = {
  parameterReceived: PropTypes.array.isRequired,
};
export default MeterBlock;
