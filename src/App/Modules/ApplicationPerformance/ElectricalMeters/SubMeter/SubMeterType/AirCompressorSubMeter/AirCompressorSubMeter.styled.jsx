import styled from 'styled-components';
import { Col, Select, Typography, Button } from 'antd';
import { padding, margin } from 'Styles/box';

const { Title } = Typography;

export const GraphSelectCol = styled(Col)`
  text-align: right;
`;

export const SelectDropDown = styled(Select)`
  width: 130px;
  text-align: center;
`;

// This method is used because we are customizing Title of Typography
export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
    text-align: center;
  }
`;

export const ColDivider = styled(Col)`
  ${padding('XS')};
`;

export const CustomButton = styled(Button)`
  width: 120px;
  ${margin('M', null)}
`;
export const ColAlign = styled(Col)`
  text-align: ${(props) => props.align};
`;
