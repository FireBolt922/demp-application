import styled from 'styled-components';
import { Divider, Typography, Col } from 'antd';
import { margin, padding } from 'Styles/box';

const { Title } = Typography;

export const DividerPadding = styled(Divider)`
  ${margin('XXS')};
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
  }
`;
export const CustomCol = styled(Col)`
  text-align: ${(props) => props.align};
  ${padding('XS')};
`;
export const CustomValue = styled(Col)`
  font-size: ${(props) => props.fontSize};
`;
