import React from 'react';
import { Row, Col } from 'antd';
import ParamBox from 'App/Common/UIComponents/ParamBox';

function KeyPerformanceSection({ data }) {
  const allHtMeterHistory = data;
  return (
    <div>
      {allHtMeterHistory.keyPerformanceIndicator ? (
        <Row>
          {allHtMeterHistory.keyPerformanceIndicator.map((item) => {
            return (
              <Col span={8} key={item.key}>
                <ParamBox label={item.params} value={item.value} />
              </Col>
            );
          })}
        </Row>
      ) : null}
    </div>
  );
}

export default KeyPerformanceSection;
