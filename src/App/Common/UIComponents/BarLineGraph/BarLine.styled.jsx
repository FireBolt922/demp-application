import styled from 'styled-components';
import { Col } from 'antd';
import { padding, margin, border } from 'Styles/box';

export const Wrapper = styled.section`
  ${margin('S')};
  ${padding('S')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
`;

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
