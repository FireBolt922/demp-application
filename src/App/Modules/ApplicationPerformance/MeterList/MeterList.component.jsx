import React from 'react';
import { Tabs } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { useParams } from 'react-router-dom';
import GasMeters from '../GasMeters';
import ElectricalMeters from '../ElectricalMeters';
import ManageWaterFlowMeter from '../WaterFlowMeter/ManageWaterFlowMeter/ManageWaterFlowMeter.component';

const { TabPane } = Tabs;

function MeterList({ match, history }) {
  const { orgName } = useParams();
  const { plantID } = useParams();
  const plantFeatures = customLocalStorage.getItem('plantFeatures', [], 'json');
  const meterCategory = [];
  plantFeatures.map((items) => {
    if (Number(plantID) === Number(items.plantId)) {
      meterCategory.push(items.meterCategory);
      return true;
    }
    return false;
  });
  return (
    <ApiSuspense>
      {meterCategory
        ? meterCategory.map((items) => {
            return (
              <div key={items}>
                {items ? (
                  <Tabs
                    centered
                    type="card"
                    defaultActiveKey={match.params.tab}
                    onChange={(key) => {
                      history.push(
                        `/org/${orgName}/${plantID}/meter-list/${key}`,
                      );
                    }}
                  >
                    {items.electrical_meters.is_enabled === true ? (
                      <TabPane
                        tab={items.electrical_meters.name}
                        key="electrical-meters"
                      >
                        {history.location.pathname ===
                          `/org/${orgName}/${plantID}/meter-list/electrical-meters` ||
                        history.location.pathname ===
                          `/org/${orgName}/${plantID}/meter-list` ? (
                          <ElectricalMeters />
                        ) : null}
                      </TabPane>
                    ) : null}
                  </Tabs>
                ) : null}
              </div>
            );
          })
        : null}
    </ApiSuspense>
  );
}
export default MeterList;
