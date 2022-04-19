import styled from 'styled-components';
import { Col, Button, Select, Divider } from 'antd';
import { padding } from 'Styles/box';

export const AddStaffCol = styled(Col)`
  text-align: ${(props) => props.align};
`;
export const AddStaffButton = styled(Button)`
  width: 100%;
`;
export const AddStaffSelect = styled(Select)`
  width: 300px;
`;
export const MainWrapper = styled(Col)`
  width: 1184px;
  height: 691px;
  border-radius: 20px;
  background-color: #ffffff;
  ${padding('XS')};
`;
export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const DividerPadding = styled(Divider)`
  margin: 7px 0px 10px 0px;
`;
