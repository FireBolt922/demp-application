import styled from 'styled-components';
import { Col, Divider, Button } from 'antd';
import { padding, margin } from 'Styles/box';

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;

export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;

export const CustomButton = styled(Button)`
  width: 120px;
  ${margin('M', null)}
`;

export const ColAlign = styled(Col)`
  text-align: ${(props) => props.align};
`;
