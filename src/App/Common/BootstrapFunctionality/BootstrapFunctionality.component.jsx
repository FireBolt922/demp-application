import LogoutFunctionality from 'App/Common/Functionalities/LogoutFunctionality';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { dummyBootstrapResponse } from './BootstrapFunctionality.utilities';

/**
 * This functionality will be called on every hard refresh
 * Objective of this function : To get the latest account and plant related details
 */
function BootstrapFunctionality() {
  const bootstrapResponse = dummyBootstrapResponse;

  if (
    bootstrapResponse &&
    bootstrapResponse.enforcedResetPassword === true &&
    window.location.pathname !== '/enforced-reset-password'
  ) {
    window.location.href = '/enforced-reset-password';
  } else if (
    bootstrapResponse &&
    bootstrapResponse.organisationDetails.planExpired === true
  ) {
    window.location.href = `/plan-status?message=${bootstrapResponse.organisationDetails.message}`;
  } else if (bootstrapResponse && bootstrapResponse.enforcedLogout === true) {
    LogoutFunctionality();
    window.location.href = '/login';
  } else if (bootstrapResponse) {
    customLocalStorage.setValue(
      'plantFeatures',
      bootstrapResponse.plantFeatures,
    );
  }
}

export default BootstrapFunctionality;
