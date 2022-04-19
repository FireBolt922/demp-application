import styled from 'styled-components';
import { Typography, Input, Calendar, Tooltip, Col } from 'antd';
import { padding, border, margin } from 'Styles/box';

const { Title, Text } = Typography;

export const CustomCalendar = styled(Calendar)`
  ${padding('M')}
`;
export const CustomInput = styled(Input)`
  text-align: center;
  ${border('solid', 'S')}
  /* overwriting width because we do not have 2px in style box */
  border-width: 2px;
  border-color: ${(props) =>
    props.inputcolor === 'lightgreen' ? 'green' : 'red'};
  ::placeholder {
    color: gray;
  }
`;

export const CustomTooltip = styled(Tooltip)`
  ${margin('S', 'left')}
`;

export const MonthTitle = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const CustomTitle = styled(Title)`
  display: flex;
  ${margin('S', 'left')}
  ${margin('S', 'right')}  
  &.ant-typography {
    ${margin('XS', 'top')}
    text-align: center;
  }
`;

export const CustomPadding = styled(Col)`
  display: flex;
  flex-direction: row-reverse;
  ${padding('XS', 'right')}
`;

export const CustomText = styled(Text)`
  font-style: italic;
`;
