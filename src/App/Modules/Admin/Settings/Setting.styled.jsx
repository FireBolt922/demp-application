import { Col, Typography, Row, InputNumber } from 'antd';
import styled from 'styled-components';
import { margin } from 'Styles/box';
import {
  QuestionCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export const ContractDemandInput = styled(InputNumber)`
  width: 25vh;
`;

export const RowCenter = styled(Row)`
  align: center;
`;

export const CustomQuestionCircleOutlined = styled(QuestionCircleOutlined)`
  fontsize: 1vh;
`;

export const CustomCheckCircleOutlined = styled(CheckCircleOutlined)`
  color: green;
`;

export const CustomClosedCircleOutlined = styled(CloseCircleOutlined)`
  color: red;
`;

export const ColDivider = styled(Col)`
  ${margin('L1', 'top')}
`;

export const CustomCol = styled(Col)`
  text-align: right;
`;

export const ContractCol = styled(Col)`
  padding-left: 3vh;
`;

export const CustomTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
  }
`;

export const CustomInputNumber = styled(InputNumber)`
  width: 60vh;
`;
