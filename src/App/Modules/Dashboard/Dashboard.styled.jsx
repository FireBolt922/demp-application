import styled from 'styled-components';
import { Col, Divider } from 'antd';
import { padding } from 'Styles/box';

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;
export const TextCenterCol = styled(Col)`
  text-align: center;
`;
