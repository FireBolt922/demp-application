import { Col, Divider, Typography, Button, Form } from 'antd';
import styled from 'styled-components';
import { padding, margin } from 'Styles/box';

const { Title } = Typography;

export const DividerPadding = styled(Divider)`
  ${margin('XXS')};
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
  }
`;

export const CustomFormItem = styled(Form.Item)`
  width: 25vh;
`;

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;

export const FormButton = styled(Button)`
  width: 130px;
`;
export const TextCenter = styled(Col)`
  text-align: center;
`;
