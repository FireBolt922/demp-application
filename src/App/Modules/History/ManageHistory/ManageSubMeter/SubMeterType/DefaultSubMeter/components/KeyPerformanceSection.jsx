import React from 'react';
import { Row, Col } from 'antd';
import ParamBox from 'App/Common/UIComponents/ParamBox';

function KeyPerformanceSection({ data }) {
  const allSubMeterHistory = data;
  return (
    <div>
      {allSubMeterHistory.keyPerformanceIndicator ? (
        <Row>
          {allSubMeterHistory.keyPerformanceIndicator.map((item) => {
            return (
              <Col span={8} key={item.key}>
                <ParamBox label={item.name} value={item.value} />
              </Col>
            );
          })}
        </Row>
      ) : null}
    </div>
  );
}

export default KeyPerformanceSection;
