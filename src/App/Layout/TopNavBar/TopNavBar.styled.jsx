import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const CustomFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-end;
  flex: 1;
`;
