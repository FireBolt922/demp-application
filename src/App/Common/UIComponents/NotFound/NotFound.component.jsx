import React from 'react';
import { Result, Button } from 'antd';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { PRODUCTION_ENTRY_USER_DESIGNATION } from 'App/Constants/app.constants';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  const acl = customLocalStorage.getItem('acl', [], 'json');
  if (acl.length === 0) {
    history.push({
      pathname: `/login`,
    });
  }
  function redirectHome() {
    const designation = acl[0].designation__name.toUpperCase();
    const orgName = acl[0].organisation__slug_name;
    const plantID = customLocalStorage.getItem('selectedPlant', null, 'number');
    if (designation !== PRODUCTION_ENTRY_USER_DESIGNATION) {
      window.location.href = `/org/${orgName}/${plantID}/dashboard`;
    } else {
      window.location.href = `/org/${orgName}/${plantID}/application-production`;
    }
  }
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={redirectHome}>
            Back Home
          </Button>
        }
      />
    </>
  );
}

export default NotFound;
