import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { margin } from 'Styles/box';

export const StatusCircle = styled.p`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin: auto;
  ${margin('XXS', 'right')}
  background-color: ${(props) => props.color};
`;
export const MeterName = styled(Link)`
  display: inline;
  cursor: pointer;
  color: black;
`;
