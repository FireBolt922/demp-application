import styled from 'styled-components';
import Flex from 'App/Common/UIComponents/Flex/Flex.styled';

import { padding, margin } from 'Styles/box';

export const Section = styled.section`
  margin: auto;
  ${padding('L8')};
  background: ${(props) => props.theme['white-color']};
  min-width: 300px;
  text-align: center;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.16);
`;
export const Logo = styled(Flex)`
  height: 32px;
  ${margin('L8')}
`;
