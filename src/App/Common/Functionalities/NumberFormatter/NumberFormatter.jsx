const NumberFormatter = (value, decimal) => {
  // values : the number which we want to add commas
  // decimal: the number of digits after decimal points
  // separates the decimal values and restricts the decimal to two digits only.
  const decimalFormattedValue = parseFloat(
    parseFloat(value).toFixed(decimal),
  ).toLocaleString(
    'en-In', // Language
    {
      useGrouping: true,
    },
  );
  return decimalFormattedValue;
};

export default NumberFormatter;
