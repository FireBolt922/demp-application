import styled from 'styled-components';
import { Col, Typography, Divider, Button } from 'antd';
import { padding, margin, border } from 'Styles/box';

const { Title } = Typography;

export const ColPadding = styled(Col)`
  ${padding('XS')};
`;

export const MiniBox = styled.section`
  ${margin('XS')};
  text-align: center;
  ${padding('M')};
  ${border('default', 'L1')};
  background-color: ${(props) => props.theme['white-color']};
  height: ${(props) => props.height};
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

export const CustomTitle = styled(Title)`
  &.ant-typography {
    ${margin('XXS')}
  }
`;
export const ColDivider = styled(Col)`
  ${padding('XS')};
  text-align: center;
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;
export const TextCenter = styled(Col)`
  text-align: center;
`;
export const FormButton = styled(Button)`
  width: 130px;
`;
