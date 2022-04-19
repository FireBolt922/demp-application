import styled from 'styled-components';
import { Col, Select, Divider, Button, Typography } from 'antd';
import { padding, margin } from 'Styles/box';
import Flex from 'App/Common/UIComponents/Flex/Flex.styled';

const { Title } = Typography;
export const ColDivider = styled(Col)`
  ${padding('XS')};
  text-align: center;
`;
export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const RoundBox = styled(Flex)`
  ${margin('L2', 'top')};
  border-radius: 20px;
  border: solid 2px ${(props) => props.color};
  ${padding('XS')};
`;
export const GraphSelectCol = styled(Col)`
  text-align: right;
`;
export const SelectDropDown = styled(Select)`
  width: 130px;
  text-align: left;
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;
export const ColAlign = styled(Col)`
  text-align: ${(props) => props.align};
`;
export const FormButton = styled(Button)`
  width: 130px;
`;
export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
    text-align: center;
  }
`;
export const CustomButton = styled(Button)`
  width: 120px;
  ${margin('M', null)}
`;
export const ParameterText = styled.div`
  ${margin('XXS')};
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

export const ParameterDigit = styled.div`
  font-size: 20px;
  margin-left: 70px;
`;
