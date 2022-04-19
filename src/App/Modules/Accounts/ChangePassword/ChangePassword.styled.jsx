import styled from 'styled-components';
import { margin, padding } from 'Styles/box';

export const Section = styled.section`
  background: ${(props) => props.theme['white-color']};
  border-radius: 20px;
  min-width: 800px;
  ${padding('M')}
  ${margin('XXS')}
`;

export const CenterBox = styled.section`
  width: 700px;
  padding-left: 350px;
  text-align: center;
`;
