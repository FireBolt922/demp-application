import styled from 'styled-components';
import { Col, Divider, Button, Typography, Select } from 'antd';
import { padding, margin } from 'Styles/box';

const { Title } = Typography;
export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const DividerPadding = styled(Divider)`
  ${margin('XXS', 'bottom')};
`;
export const FormButton = styled(Button)`
  width: 130px;
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
  }
`;
export const TextCenter = styled(Col)`
  text-align: center;
`;

export const CustomSelect = styled(Select)`
  width: 32vh;
`;
