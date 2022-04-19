import styled from 'styled-components';
import { Row, Col, Divider, Select, Button, Typography } from 'antd';
import { padding, margin, border } from 'Styles/box';
import Flex from 'App/Common/UIComponents/Flex/Flex.styled';

const { Title } = Typography;
export const Wrapper = styled(Row)`
  ${margin('XS')};
  background-color: ${(props) => props.theme['white-color']};
  border-radius: 20px;
  ${padding('M')};
  ${border('default', 'L1')};
`;
export const ColDivider = styled(Col)`
  ${padding('XS')};
  text-align: center;
`;
export const ColPadding = styled(Col)`
  ${padding('XS')};
`;
export const DividerPadding = styled(Divider)`
  ${margin('XXS', 'bottom')};
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
export const SelectDropDown = styled(Select)`
  width: 130px;
  text-align: left;
`;
export const MiniBox = styled.section`
  ${margin('XS')};
  text-align: center;
  ${padding('M')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
`;

export const FormCol = styled(Col)`
  margin-bottom: -14px;
  ${margin('M', 'top')};
`;
export const FormButton = styled(Button)`
  width: 130px;
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
    text-align: left;
  }
`;
export const ParamBoxValue = styled(Col)`
  text-align: center;
  font-size: 20px;
`;

export const ParamBoxLabel = styled(Col)`
  text-align: center;
  font-size: 14px;
`;
export const ParameterText = styled.div`
  margin-left: 150px;
  font-size: 14px;
`;

export const ParameterDigit = styled.div`
  font-size: 20px;
  margin-left: 70px;
`;
export const TextCenter = styled(Col)`
  text-align: center;
`;
