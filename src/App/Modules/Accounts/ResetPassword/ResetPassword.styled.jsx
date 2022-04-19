import styled from 'styled-components';
import { Button, Input } from 'antd';
import { padding, margin } from 'Styles/box';
import Flex from 'App/Common/UIComponents/Flex';

export const Section = styled.section`
  ${padding('L8')};
  background: ${(props) => props.theme['white-color']};
  min-width: 600px;
  text-align: center;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.16);
  margin: auto;
`;
export const InputTag = styled(Input)`
  width: 300px;
`;
export const SubmitButton = styled(Button)`
  width: 100px;
`;
export const Logo = styled(Flex)`
  height: 32px;
  ${margin('L8')}
`;
export const CenterBox = styled.section`
  width: 700px;
  padding-left: 350px;
  text-align: center;
`;
