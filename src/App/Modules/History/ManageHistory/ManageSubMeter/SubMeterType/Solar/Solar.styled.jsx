import styled from 'styled-components';
import { Col, Button, Divider, Select, Form } from 'antd';
import { padding } from 'Styles/box';

export const ColPadding = styled(Col)`
  ${padding('XS')};
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
