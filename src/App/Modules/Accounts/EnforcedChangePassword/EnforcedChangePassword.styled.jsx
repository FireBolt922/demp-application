import styled from 'styled-components';
import { padding, margin, border } from 'Styles/box';

export const Section = styled.section`
  background: ${(props) => props.theme['white-color']};
  ${border('L2')}
  ${padding('M')};
  ${margin('XXS')}
  /* This is status 250 because our variables do not have 250 */
  margin-right: 250px;
  ${margin('L8', 'top')}
`;

export const CenterBox = styled.section`
  width: 600px;
  padding-left: 230px;
  text-align: center;
`;
