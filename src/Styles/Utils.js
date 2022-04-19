import * as variables from './Variables';

function convertPxToEm(base = '16px', size, unit = 'em') {
  const actualSize = variables[size.toUpperCase()];
  if (!actualSize) {
    throw new Error(`${size} is not a valid size`);
  }
  const baseFontSize = parseInt(base.slice(0, base.length - 2), 10);
  const expectedSize = parseInt(actualSize.slice(0, actualSize.length - 2), 10);
  return expectedSize / baseFontSize + unit;
}

export { convertPxToEm };
