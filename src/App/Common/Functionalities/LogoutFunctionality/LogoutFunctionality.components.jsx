import * as customLocalStorage from 'utilities/storage/customLocalStorage';

function LogoutFunctionality() {
  const dataToRemoveFromLocalStorage = [
    'userToken',
    'userInfo',
    'acl',
    'selectedPlant',
    'plantName',
    'plantFeatures',
    'tourFlag',
  ];
  dataToRemoveFromLocalStorage.forEach((items) => {
    customLocalStorage.removeValue(items);
  });
}

export default LogoutFunctionality;
