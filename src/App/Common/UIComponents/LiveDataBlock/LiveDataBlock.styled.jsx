import { Divider, Typography } from 'antd';
import styled from 'styled-components';
import { margin } from 'Styles/box';

const { Title } = Typography;

export const DividerPadding = styled(Divider)`
  ${margin('XXS')};
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
  }
`;
