import styled from 'styled-components';

function getFlexDirection(dir) {
  switch (dir) {
    case 'col':
    case 'column':
      return 'column';
    case 'row':
    case 'r':
      return 'row';
    case 'col-reverse':
    case 'column-reverse':
      return 'column-reverse';
    case 'row-reverse':
    case 'r-reverse':
      return 'row-reverse';
    default:
      return '';
  }
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.center
      ? ` align-content: center;
          justify-content: center;`
      : ''}
  flex-direction: ${(props) => getFlexDirection(props.dir)};
  ${(props) => (props.itemStart ? 'align-items: flex-start;' : '')}
  ${(props) => (props.itemEnd ? 'align-items: flex-end;' : '')}
  ${(props) => (props.itemBaseline ? 'align-items: baseline;' : '')}
  ${(props) => (props.itemCenter ? 'align-items: center;' : '')}
  ${(props) => (props.justifyBetween ? 'justify-content: space-between;' : '')}
  ${(props) => (props.justifyStart ? 'justify-content: flex-start;' : '')}
  ${(props) => (props.justifyAround ? 'justify-content: space-around;' : '')}
  ${(props) => (props.justifyCenter ? 'justify-content: center;' : '')}
  ${(props) => (props.justifyContentEnd ? 'justify-content: flex-end;' : '')}
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : '')};
  ${(props) => (props.justifyStart ? 'justify-content: start' : '')};
  ${(props) => props.fullWidth && 'width:100%;'}
  ${(props) => props.fullHeight && 'height:100%;'}
`;
export default Flex;
