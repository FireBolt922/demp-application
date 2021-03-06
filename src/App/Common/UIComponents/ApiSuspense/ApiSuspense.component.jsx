import React from 'react';
import { Skeleton, Result } from 'antd';
import PropTypes from 'prop-types';
import { API_NETWORK_STATUS, DATA_TEXTS } from 'App/Constants/app.constants';
import { getMeta } from './ApiSuspense.utilities';

function ApiSuspense({ meta, children, AlertComponent, errorTitle }) {
  const { state, error = null } = getMeta(meta);
  switch (state) {
    case API_NETWORK_STATUS.FAILURE:
      return AlertComponent ? (
        <AlertComponent
          message={
            (error && error.data && error.data.errorMessage) || DATA_TEXTS.ERROR
          }
          type="error"
        />
      ) : (
        <Result
          status="500"
          title={errorTitle}
          subTitle={
            (error && error.data && error.data.errorMessage) || DATA_TEXTS.ERROR
          }
        />
      );
    case API_NETWORK_STATUS.LOADING:
      return <Skeleton loading active />;
    case API_NETWORK_STATUS.SUCCESS:
      if (typeof children === 'function') {
        return children();
      }
      return children;
    default:
      return null;
  }
}
ApiSuspense.propTypes = {
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  AlertComponent: PropTypes.func,
  errorTitle: PropTypes.string,
};

ApiSuspense.defaultProps = {
  meta: null,
  children: null,
  AlertComponent: null,
  errorTitle: 'We messed up something...',
};

export default ApiSuspense;
