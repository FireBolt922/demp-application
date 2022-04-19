import styled from 'styled-components';
import { Col, Divider } from 'antd';
import { margin } from 'Styles/box';

export const CenterText = styled(Col)`
  text-align: center;
`;

export const DividerPadding = styled(Divider)`
  ${margin('S')};
`;
