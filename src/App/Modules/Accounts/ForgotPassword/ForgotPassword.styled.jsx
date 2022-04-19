import styled from 'styled-components';
import { Button, Input } from 'antd';
import { padding, margin } from 'Styles/box';
import Flex from 'App/Common/UIComponents/Flex';

export const Section = styled.section`
  margin: auto;
  ${padding('L8')};
  background: ${(props) => props.theme['white-color']};
  min-width: 300px;
  text-align: center;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.16);
`;
export const InputTag = styled(Input)`
  width: 300px;
`;
export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const Logo = styled(Flex)`
  height: 32px;
  ${margin('L8')}
`;
