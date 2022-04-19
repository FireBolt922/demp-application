// This function is used to convert the item to given data type
function convertToDataType(item, defaultValue, dataType) {
  if (dataType === 'str') {
    return item ? String(item) : defaultValue;
  }
  if (dataType === 'number') {
    return item.match(/^-?\d+$/) ? Number(item) : defaultValue;
  }
  if (dataType === 'float') {
    return item.match(/^\d+\.\d+$/) ? parseFloat(item) : defaultValue;
  }
  if (dataType === 'json') {
    return item ? JSON.parse(item) : defaultValue;
  }
  //  Send default value
  return item || defaultValue;
}
// This function will get the localStorage
function getItem(key, defaultValue, dataType) {
  try {
    return convertToDataType(
      window.localStorage.getItem(key),
      defaultValue,
      dataType,
    );
  } catch (error) {
    return defaultValue;
  }
}
// This function will set the localStorage
function setValue(key, value) {
  try {
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // A more advanced implementation would handle the error case
  }
}

function removeValue(key) {
  window.localStorage.removeItem(key);
}

export { getItem, setValue, removeValue };
