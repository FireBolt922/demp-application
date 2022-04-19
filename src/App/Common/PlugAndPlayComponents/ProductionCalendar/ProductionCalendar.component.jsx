import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Form, Space, Tooltip } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { dummyPlantProductionData } from 'App/Modules/Productions/PlantProduction/PlantProduction.utilities';
import {
  CustomInput,
  CustomCalendar,
  MonthTitle,
  CustomTitle,
  CustomPadding,
  CustomText,
} from './ProductionCalendar.styled';
import './ProductionCalendar.css';

function ProductionCalendar({ requestedComponentData }) {
  const { plantID } = useParams();
  // The below variable is used for storing production data
  const [productionData, setProductionData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState();
  // get all the production data from from the below call
  const autoCallArgsParameters = [];
  if (requestedComponentData.productionType === 'meter') {
    autoCallArgsParameters.push(requestedComponentData.meterId, plantID);
  } else {
    autoCallArgsParameters.push(plantID);
  }
  const response = dummyPlantProductionData;
  // useEffect(() => {
  //   if (requestedComponentData.productionType === 'meter')
  //     getProductionData(plantID, requestedComponentData.meterId);
  //   else getProductionData(plantID);
  // }, [
  //   requestedComponentData.meterId,
  //   plantID,
  //   getProductionData,
  //   requestedComponentData.productionType,
  // ]);
  // This variable is used to get the lastProductionDate and insert it as starting value in cal
  const [lastProductionDate, setLastProductionDate] = useState();
  /** The below use Effect runs once and sets all the required variables like plant registered
   * date and the production data which is already present in the database.
   */
  useEffect(() => {
    if (response.productionData) {
      if (response.productionData.length !== 0) {
        setLastProductionDate(response.productionData[0].date);
      } else if (
        response.productionData.length === 0 &&
        response.isProductionDataNull === false
      ) {
        setLastProductionDate(moment(selectedMonth).startOf());
      } else if (
        response.productionData.length === 0 &&
        response.isProductionDataNull === true
      ) {
        setLastProductionDate(response.firstProductionDate);
      }
      const dataToPushInProd = [];
      for (let data = 0; data < response.productionData.length; data += 1) {
        dataToPushInProd.push({
          date: response.productionData[data].date,
          value: response.productionData[data].production,
        });
      }
      setProductionData(dataToPushInProd);
    }
  }, [response, selectedMonth]);
  /**
   * @summary This function will generate a post or put call depending on the condition.
   * @param {moment} date - Date for which production is to be updated or posted.
   * @param {Number} productionValue - The value of production.
   */
  /** This function will add the values and date to the temporary stored production data */
  const onChange = (index, event) => {
    const dataToPushInProd = [...productionData];
    const elementIndex = dataToPushInProd.findIndex(
      (obj) => obj.date === index,
    );
    if (elementIndex < 0) {
      dataToPushInProd.push({ date: index, value: event.target.value });
    } else {
      dataToPushInProd[elementIndex].value = event.target.value;
    }
    setProductionData(dataToPushInProd);
  };
  function storeProductionValue(date, productionValue) {
    // here we check if existing value is same we do nothing or else we post new value
    let updatedValues = false;
    response.productionData.forEach((data) => {
      if (
        data.date === moment(date).format('YYYY-MM-DD') &&
        data.production === productionValue
      ) {
        updatedValues = true;
      }
    });
    // if plant production this function is called
    if (requestedComponentData.productionType === 'plant') {
      if (productionValue >= 0) {
        requestedComponentData.urls.add(plantID, {
          production_date: moment(date).format('YYYY-MM-DD'),
          production_value: productionValue,
        });
      }
      // if meter production this is called
    } else if (productionValue >= 0 && updatedValues === false) {
      requestedComponentData.urls.add(plantID, requestedComponentData.meterId, {
        production_date: moment(date).format('YYYY-MM-DD'),
        production_value: productionValue,
      });
    }
  }
  /**
   * In the calendar UI this function will generate a Input field in which we will enter productionValue
   * @param {moment} date - Date for which we can enter production
   * @return {UI} Input field in side the calendar Date section.
   */
  function onFullRender(date) {
    const fullDate = date.date();
    const index = moment(date).format('YYYY-MM-DD');
    const dataToPushInProd = [...productionData];
    const elementIndex = dataToPushInProd.findIndex(
      (obj) => obj.date === moment(index).format('YYYY-MM-DD'),
    );
    let productionValue;
    if (elementIndex >= 0) {
      productionValue = Math.floor(dataToPushInProd[elementIndex].value);
    }
    // condition: if date is greater than plants first date and less than current date
    // and also the date is selected for current month only then only display input and production data.
    // line 143 to line 159.
    return (
      <div className="ant-picker-cell-inner ant-picker-calendar-date">
        <div className="ant-picker-calendar-date-value">{fullDate}</div>
        <Form.Item>
          {moment(date).format('YYYY-MM-DD') <
            moment(new Date()).format('YYYY-MM-DD') &&
          moment(date).format('YYYY-MM-DD') >=
            moment(response.firstProductionDate).format('YYYY-MM-DD') &&
          moment(date).format('YYYY-MM-DD') <
            moment(new Date()).format('YYYY-MM-DD') &&
          moment(date).format('YYYY-MM-DD') >
            moment(lastProductionDate)
              .clone()
              .startOf('month')
              .subtract(1, 'day')
              .format('YYYY-MM-DD') &&
          moment(date).format('YYYY-MM-DD') <
            moment(lastProductionDate)
              .clone()
              .endOf('month')
              .add(1, 'day')
              .format('YYYY-MM-DD') ? (
            <CustomInput
              value={productionValue}
              type="number"
              // inputcolor is in lower case because dom dose not allow camelCase here
              inputcolor={productionValue >= 0 ? 'lightgreen' : 'pink'}
              onChange={(event) => onChange(index, event)}
              placeholder="Enter Production"
              onBlur={(event) => {
                if (event.target.value !== '') {
                  storeProductionValue(date, Number(event.target.value));
                }
              }}
            />
          ) : null}
        </Form.Item>
      </div>
    );
  }
  const changeToPreviousMonth = () => {
    setSelectedMonth(moment(lastProductionDate).subtract(1, 'month'));
    if (requestedComponentData.productionType === 'plant') {
      // getProductionData(
      //   plantID,
      //   GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_START_DATE(lastProductionDate),
      // );
    } else {
      // getProductionData(
      //   plantID,
      //   requestedComponentData.meterId,
      //   GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_START_DATE(lastProductionDate),
      // );
    }
  };
  const changeToNextMonth = () => {
    setSelectedMonth(moment(lastProductionDate).add(1, 'month'));
    if (requestedComponentData.productionType === 'plant') {
      // getProductionData(
      //   plantID,
      //   GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_END_DATE(lastProductionDate),
      // );
    } else {
      // getProductionData(
      //   plantID,
      //   requestedComponentData.meterId,
      //   GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_END_DATE(lastProductionDate),
      // );
    }
  };
  const onCalendarPanelChange = (month) => {
    setSelectedMonth(month);
    // const fromDate = moment(month)
    //   .clone()
    //   .startOf('month')
    //   .format('YYYY-MM-DD');
    // const toDate = moment(month).clone().endOf('month').format('YYYY-MM-DD');
    if (requestedComponentData.productionType === 'plant') {
      // getProductionData(plantID, `from=${fromDate}&to=${toDate}`);
    } else {
      // getProductionData(
      //   plantID,
      //   requestedComponentData.meterId,
      //   `from=${fromDate}&to=${toDate}`,
      // );
    }
  };
  // This is the main return from where we have called the calendar
  return (
    <ApiSuspense>
      <Wrapper>
        <CustomPadding>
          <CustomText italic>
            *Production Unit : {response.productionUnit}
          </CustomText>
        </CustomPadding>
        {/* This is for the arrows in the production calendar for updating months */}
        <MonthTitle>
          <Space>
            <Tooltip placement="topLeft" title="Previous Month">
              {moment(lastProductionDate)
                .subtract(1, 'month')
                .format('YYYY-MM') >=
              moment(response.firstProductionDate).format('YYYY-MM') ? (
                <DoubleLeftOutlined onClick={changeToPreviousMonth} />
              ) : null}
            </Tooltip>
            <CustomTitle level={4}>
              {moment(lastProductionDate).format('MMMM-YYYY')}
            </CustomTitle>
            <Tooltip placement="topLeft" title="Next Month">
              {moment(lastProductionDate).add(1, 'month').format('YYYY-MM') >
              moment(new Date()).format('YYYY-MM') ? null : (
                <DoubleRightOutlined onClick={changeToNextMonth} />
              )}
            </Tooltip>
          </Space>
        </MonthTitle>
        <CustomCalendar
          onPanelChange={(event) => {
            onCalendarPanelChange(event);
          }}
          value={moment(lastProductionDate)}
          dateFullCellRender={onFullRender}
          validRange={[
            moment(response.firstProductionDate),
            moment(new Date()),
          ]}
        />
      </Wrapper>
    </ApiSuspense>
  );
}
ProductionCalendar.protoTypes = {
  requestedComponentData: PropTypes.object.isRequired,
};
export default ProductionCalendar;
