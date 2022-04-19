import styled from 'styled-components';
import { Button, Input } from 'antd';
import { padding } from 'Styles/box';

export const Section = styled.section`
  margin: auto;
  ${padding('L8')};
  background: ${(props) => props.theme['white-color']};
  min-width: 30vh;
  text-align: center;
  box-shadow: 0 0 1.8vh 0 rgba(0, 0, 0, 0.16);
`;
export const SignupButton = styled(Button)`
  width: 30vh;
`;
export const InputTag = styled(Input)`
  width: 30vh;
`;

export const CenterBox = styled.section`
  width: 30vh;
  height: auto;
  text-align: center;
`;
