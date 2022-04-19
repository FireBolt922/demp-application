import styled from 'styled-components';
import { Divider, Typography, Col } from 'antd';
import { padding } from 'Styles/box';

const { Text } = Typography;

export const DividerPadding = styled(Divider)`
  margin: 8px 0;
`;

export const CustomText = styled(Text)`
  color: ${(props) => props.color};
`;

export const CustomTextForValue = styled(Col)`
  ${padding('L8', 'left')}
`;
