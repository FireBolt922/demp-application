import { useEffect, useRef, useState } from 'react';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { defaultTransformer } from './network.utils';

function useNetwork(promiseFunction, options = {}) {
  if (!(typeof promiseFunction === 'function')) {
    throw new Error('First argument to useNetwork should be a Promise Object');
  }
  const history = useHistory();
  const {
    transformer = defaultTransformer,
    auto = false,
    autoCallArgs = [],
  } = { ...options };

  const [network, setNetworkState] = useState({ state: null, error: null });

  const autoCallConfig = useRef({ auto, autoCallArgs });
  const unmounted = useRef(false);
  const transform = useRef(transformer);
  useEffect(() => {
    transform.current = transformer;
  }, [transformer]);

  const [response, setResponse] = useState(() => transformer(null));
  const call = useRef(async (...args) => {
    try {
      const loadingNetworkMeta = { state: 'loading', error: null };
      setNetworkState(loadingNetworkMeta);
      const networkResponse = await promiseFunction(...args);
      const transformed = transform.current(networkResponse.data, {
        ...response,
      });
      const successNetworkMeta = { state: 'success', error: null };
      setNetworkState(successNetworkMeta);
      if (!unmounted.current) {
        setResponse(transformed);
      }
      return [transformed, successNetworkMeta];
    } catch (error) {
      const networkMeta = { state: 'failure', error };
      if (!unmounted.current) {
        setNetworkState(networkMeta);
      }
      if (error.status === 401) {
        notification.error({
          message: 'Authentication Failed',
        });
        customLocalStorage.removeValue('userToken');
        customLocalStorage.removeValue('userInfo');
        customLocalStorage.removeValue('acl');
        customLocalStorage.removeValue('selectedPlant');
        history.push('/login');
      } else if (error.status === 403) {
        notification.error({
          message: 'Authorization Failed',
          description: "You don't have permission for the operation",
        });
        Sentry.captureException(error);
      } else if (error.status === 500) {
        notification.error({
          message: 'Something went wrong',
          description: 'Something went wrong in the server.',
        });
      } else if (error.status === 400) {
        notification.error({
          message: 'Something went wrong',
        });
        Sentry.captureException(error);
      } else {
        notification.error({
          message: 'Something went wrong',
          description: error.details,
        });
        Sentry.captureException(error);
      }
      return [error, networkMeta];
    }
  });

  useEffect(() => {
    unmounted.current = false;
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (autoCallConfig.current.auto) {
      call.current(...autoCallConfig.current.autoCallArgs);
    }
  }, []);

  return {
    response,
    network,
    call: call.current,
  };
}

export { useNetwork };
