import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantPerformanceHistory from 'App/Modules/History/ManageHistory/ManagePlantPerformance/components/PlantPerformanceHistory';
import HistoryMeterUI from 'App/Modules/History/ManageHistory/HistoryMeterUI/HistoryMeterUI.component';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { useParams } from 'react-router-dom';
import customLocalStorage from 'utilities/storage';

function ManagePlantPerformance({ plantPerformanceData }) {
  const { plantID } = useParams();
  const [plantStartDate, setPlantStartDate] = useState();

  useEffect(() => {
    const plantFeatures = customLocalStorage.getItem(
      'plantFeatures',
      [],
      'json',
    );
    plantFeatures.map((items) => {
      if (Number(plantID) === Number(items.plantId)) {
        setPlantStartDate(items.plantStartDate);
      }
      return plantStartDate;
    });
  }, [plantStartDate, plantID]);
  return (
    <ApiSuspense>
      {plantPerformanceData.startDate && plantPerformanceData.endDate ? (
        <PlantPerformanceHistory
          startDate={plantPerformanceData.startDate}
          endDate={plantPerformanceData.endDate}
          plantStartDate={plantStartDate}
        />
      ) : null}
      {plantStartDate &&
      !plantPerformanceData.startDate &&
      !plantPerformanceData.endDate ? (
        <HistoryMeterUI plantStartDate={plantStartDate} />
      ) : null}
    </ApiSuspense>
  );
}
ManagePlantPerformance.protoTypes = {
  plantPerformanceData: PropTypes.object.isRequired,
};
export default ManagePlantPerformance;
