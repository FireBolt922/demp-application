import styled from 'styled-components';
import { Tag, Col } from 'antd';
import { padding, margin, border } from 'Styles/box';

export const Wrapper = styled.section`
  ${margin('S')};
  ${padding('S')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
`;

export const TextData = styled.section`
  ${margin('L2', 'top')};
`;

export const CustomTag = styled(Tag)`
  width: 130px;
  text-align: center;
`;

export const RefreshButtonCol = styled(Col)`
  text-align: right;
`;
