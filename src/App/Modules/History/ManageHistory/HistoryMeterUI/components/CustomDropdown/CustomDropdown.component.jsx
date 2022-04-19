import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from 'App/Modules/History/ManageHistory/HistoryMeterUI/components/CustomDropdown/CustomDropdown.styled';
import { Select } from 'antd';

const { Option } = Select;
/**
 * A dropdown to select Htmeters and Submeters
 * @param {function} onChanged - to pass the selcted meter to parent component
 * @param {object} data - list of Htmeters or Submeters
 */
const CustomDropdown = ({ meterList, handleDropdownValues, onChange }) => {
  const [meterType, setMeterType] = useState(null);
  const [meterReadingStartDate, setMeterReadingStartDate] = useState(null);

  function handleDropdownChange(event) {
    if (meterList[0].applicationType) {
      meterList.forEach((item) => {
        if (event === item.id) {
          setMeterType(item.applicationType);
          setMeterReadingStartDate(item.readingStartDate);
        }
      });
    } else {
      meterList.forEach((item) => {
        if (event === item.id) {
          setMeterReadingStartDate(item.readingStartDate);
        }
      });
    }
    if (onChange) {
      onChange(event);
    }
  }

  useEffect(() => {
    handleDropdownValues(meterType, meterReadingStartDate);
  }, [handleDropdownValues, meterType, meterReadingStartDate]);
  return (
    <StyledSelect
      placeholder="Select Meter"
      onChange={handleDropdownChange}
      id="select"
    >
      {meterList
        ? meterList.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            );
          })
        : null}
    </StyledSelect>
  );
};

CustomDropdown.prototype = {
  meterList: PropTypes.object.isRequired,
  onChanged: PropTypes.func.isRequired,
};
export default CustomDropdown;
