import styled from 'styled-components';
import { Row, Col, Divider, Select, Button, Form } from 'antd';
import { padding, margin, border } from 'Styles/box';
import Flex from 'App/Common/UIComponents/Flex/Flex.styled';

export const Wrapper = styled(Row)`
  ${margin('XS')};
  background-color: ${(props) => props.theme['white-color']};
  border-radius: 20px;
  align-items: center;
`;
export const ColDivider = styled(Col)`
  ${padding('XS')};
  text-align: center;
`;
export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const RoundBox = styled(Flex)`
  border-radius: 10px;
  ${margin('XXS')};
  ${padding('XS')};
  background-color: ${(props) => props.theme['white-color']};
`;
export const GraphSelectCol = styled(Col)`
  text-align: right;
`;

export const FormCol = styled(Col)`
  margin-bottom: -14px;
  ${margin('M', 'top')};
`;
export const MiniBox = styled.section`
  ${margin('XS')};
  text-align: center;
  ${padding('M')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
`;
export const FormButton = styled(Button)`
  width: 130px;
`;
export const TextCenter = styled(Col)`
  text-align: center;
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;

export const CustomSelect = styled(Select)`
  width: 32vh;
`;

export const CustomFormItem = styled(Form.Item)`
  width: 32vh;
`;
