import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
/**
 * A Calendar date picker to select the dates
 * @param {function} selectedDates - to pass the selected dates to parent component
 * @returns - selected dates
 */
const DateSelector = ({
  onChange,
  historyStartDate,
  historyEndDate,
  readingStartDate,
}) => {
  const [dates, setDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState();
  const triggerChange = (selectedValues) => {
    if (onChange) {
      onChange(selectedValues);
    }
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([]);
      setSelectedDates([]);
      triggerChange();
    }
  };
  const disableDate = (event) => {
    if (!dates) {
      return false;
    }
    const todaysDate = event.valueOf() > moment(Date.now()).subtract(1, 'days');
    const startDate = dates[0] && event.diff(dates[0], 'days') > 30;
    const endDate = dates[1] && dates[1].diff(event, 'days') > 30;
    return (
      startDate || endDate || todaysDate || event < moment(readingStartDate)
    );
  };
  const handleSelectedDates = (selectedValues) => {
    setSelectedDates(selectedValues);
    triggerChange(selectedValues);
  };

  return (
    <RangePicker
      value={selectedDates}
      disabledDate={disableDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={handleSelectedDates}
      onOpenChange={onOpenChange}
      defaultValue={[historyStartDate, historyEndDate]}
    />
  );
};
DateSelector.prototypes = {
  readingStartDate: PropTypes.object.isRequired,
  historyStartDate: PropTypes.object.isRequired,
  historyEndDate: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateSelector;
