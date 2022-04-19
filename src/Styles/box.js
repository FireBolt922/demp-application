import { css } from 'styled-components';
import { convertPxToEm } from './Utils';

export const paddingRemove = css`
  padding: 0;
`;

export function padding(size = 'M', dir = null) {
  switch (dir) {
    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      return css`
            padding-${dir}: ${(props) =>
        convertPxToEm(props.theme['base-font-size'], size, 'em')};
           `;
    case 'horizontal':
      return css`
        padding-left: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
        padding-right: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    case 'vertical':
      return css`
        padding-top: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
        padding-bottom: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    default:
      return css`
        padding: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
  }
}

export const marginCenter = css`
  margin: 0 auto;
`;
export const marginRemove = css`
  margin: 0;
`;

export function margin(size = 'M', dir = null) {
  switch (dir) {
    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      return css`
            margin-${dir}: ${(props) =>
        convertPxToEm(props.theme['base-font-size'], size, 'em')};
           `;
    case 'horizontal':
      return css`
        margin-left: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
        margin-right: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    case 'vertical':
      return css`
        margin-top: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
        margin-bottom: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    default:
      return css`
        margin: ${(props) =>
          convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
  }
}

export function shadow() {
  return css`
    ${(props) => `box-shadow: 0px 3px 6px ${props.theme['shadow-color']}`};
  `;
}

export function border(type = 'none', radius = 'M', width = 'XXS') {
  return css`
    border-style: ${type};
    border-radius: ${(props) =>
      convertPxToEm(props.theme['base-font-size'], radius, 'em')};
    border-width: ${(props) =>
      convertPxToEm(props.theme['base-font-size'], width, 'em')};
  `;
}
