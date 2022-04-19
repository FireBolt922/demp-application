import styled from 'styled-components';
import { padding, margin } from 'Styles/box';

import Flex from 'App/Common/UIComponents/Flex/Flex.styled';

export const Section = styled.section`
  ${margin('L8')};
  width: 67%;
  ${padding('S')};
  text-align: center;
`;

export const Logo = styled(Flex)`
  height: 32px;
  ${margin('L8')}
`;
