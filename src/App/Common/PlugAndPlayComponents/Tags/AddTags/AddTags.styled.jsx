import styled from 'styled-components';
import { Tag, Modal, Col, Button } from 'antd';
import { margin } from 'Styles/box';

export const CustomTag = styled(Tag)`
  cursor: default;
`;

export const CustomModal = styled(Modal)`
  position: absolute;
  top: 33%;
  left: 38%;
`;

export const CustomCol = styled(Col)`
  ${margin('L', 'top')};
`;

export const CustomButton = styled(Button)`
  width: 15vh;
  height: 5vh;
`;
