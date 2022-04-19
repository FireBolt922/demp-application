import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col, Divider } from 'antd';
import { margin, border, padding } from 'Styles/box';

export const StatusCircle = styled.p`
  width: 10px;
  height: 10px;
  ${border('none', 'L8')}
  display: inline-block;
  margin: auto;
  ${margin('XXS', 'right')}
  background-color: ${(props) => props.color};
`;
export const MeterName = styled(Link)`
  display: inline;
  cursor: pointer;
  color: black;
`;
export const ColDivider = styled(Col)`
  ${padding('XS')};
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;

export const CustomCol = styled(Col)`
  text-align: ${(props) => props.align};
`;
