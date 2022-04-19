import { css } from 'styled-components';
import { SCREEN_OPTIONS } from './Variables';

// general

export const devices = Object.keys(SCREEN_OPTIONS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${SCREEN_OPTIONS[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
