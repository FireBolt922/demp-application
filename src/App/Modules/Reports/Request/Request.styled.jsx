import styled from 'styled-components';
import { Tooltip, Select, Col } from 'antd';
import { margin } from 'Styles/box';

export const CustomTooltip = styled(Tooltip)`
  ${margin('S', 'left')}
`;

export const CustomSelectForReport = styled(Select)`
  width: 150px !important;
  margin-right: 15px;
`;

export const CustomCol = styled(Col)`
  margin-right: 10px;
`;
