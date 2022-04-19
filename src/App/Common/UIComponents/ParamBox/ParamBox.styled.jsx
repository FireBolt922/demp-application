import styled from 'styled-components';
import { padding, margin, border } from 'Styles/box';
import { Col } from 'antd';

export const MiniBox = styled.section`
  ${margin('XS')};
  text-align: center;
  ${padding('M')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
`;
export const ParamBoxValue = styled(Col)`
  text-align: center;
  font-size: 20px;
`;

export const ParamBoxLabel = styled(Col)`
  text-align: center;
  font-size: 14px;
`;
