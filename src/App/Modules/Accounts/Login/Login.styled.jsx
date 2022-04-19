import styled from 'styled-components';
import { Button } from 'antd';
import { padding } from 'Styles/box';

export const Section = styled.section`
  margin: auto;
  ${padding('L8')};
  background: ${(props) => props.theme['white-color']};
  min-width: 300px;
  text-align: center;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.16);
`;
export const ForgotPassword = styled.div`
  float: right;
`;
export const LoginButton = styled(Button)`
  width: 100%;
`;
export const WarningMessage = styled.text`
  color: red;
`;
