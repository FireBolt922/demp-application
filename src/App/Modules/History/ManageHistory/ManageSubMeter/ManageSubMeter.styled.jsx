import styled from 'styled-components';
import { Select, Divider, Button } from 'antd';

import { padding, margin, border } from 'Styles/box';

export const Wrapper = styled.section`
  ${margin('L1', 'top')};
  ${border('none', 'L1')};
  ${padding('S')};
  background-color: ${(props) => props.theme['white-color']};
`;
export const CustomSelect = styled(Select)`
  width: 250px;
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;

export const FormButton = styled(Button)`
  width: 130px;
`;
