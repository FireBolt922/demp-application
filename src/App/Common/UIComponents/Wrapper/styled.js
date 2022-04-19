import styled from 'styled-components';
import { margin, padding, border } from 'Styles/box';

const Wrapper = styled.section`
  ${margin('XXS', 'top')}
  ${border('none', 'L1')};
  ${padding('S')};
  background-color: ${(props) => props.theme['white-color']};
  height: ${(props) => props.height};
  text-align: ${(props) => props.align};
`;

export default Wrapper;
