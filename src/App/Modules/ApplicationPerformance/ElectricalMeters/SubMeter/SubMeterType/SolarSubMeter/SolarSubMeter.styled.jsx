import styled from 'styled-components';
import { Col, Select, Button, Typography, Divider } from 'antd';
import { padding, margin } from 'Styles/box';

const { Title } = Typography;

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;

export const GraphSelectCol = styled(Col)`
  text-align: right;
`;

export const SelectDropDown = styled(Select)`
  width: 130px;
  text-align: center;
`;

export const CustomButton = styled(Button)`
  width: 120px;
  ${margin('M', null)}
`;
export const ColAlign = styled(Col)`
  text-align: ${(props) => props.align};
`;
export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
    text-align: center;
  }
`;

export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;
