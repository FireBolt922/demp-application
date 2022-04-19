import React from 'react';
import { Result, Button } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import useRouter from 'react-hooks/router';
import LogoutFunctionality from 'App/Common/Functionalities/LogoutFunctionality';
import { CustomBackground } from './PlanExpired.styled';

function PlanExpired() {
  const router = useRouter();
  const { message } = router.query;
  function redirectToLoginPage() {
    LogoutFunctionality();
    window.location.href = '/login';
  }
  return (
    <div>
      <CustomBackground>
        <Wrapper>
          <Result
            status="warning"
            title={message}
            extra={
              <Button type="primary" onClick={redirectToLoginPage}>
                Go to Login
              </Button>
            }
          />
        </Wrapper>
      </CustomBackground>
    </div>
  );
}

export default PlanExpired;
