import React, { useState, useEffect } from 'react';
import { Typography, Result, Button, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import * as network from 'react-hooks/network/network';
import { stringifyUrlParam } from 'utilities/url';
import { verifyAccount } from 'App/Modules/Accounts/VerifiedAccount/VerifiedAccount.services';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import {
  ENERLLY_LOGIN_LOGO,
  API_NETWORK_STATUS,
} from 'App/Constants/app.constants';
import { ACCOUNT_VERIFICATION_SUCCESS_EVENT } from 'App/Common/UIComponents/SuccessMessage/SuccessMessage.constants';
import useRouter from 'react-hooks/router';
import { Section, Logo } from './VerifiedAccount.styled';

const { Paragraph } = Typography;
function Register() {
  const { call: verifyAccountCall } = network.useNetwork(verifyAccount, {
    auto: false,
  });
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { email, token } = router.query;
  const history = useHistory();
  const data = { email, token };
  const useMountEffect = (checkSuccessStatus) =>
    useEffect(checkSuccessStatus, []);

  async function doRequest() {
    console.log('ok');
    const meta = await verifyAccountCall(data);
    if (meta[1].state === API_NETWORK_STATUS.SUCCESS) {
      history.push({
        pathname: '/success',
        search: stringifyUrlParam({
          event_type: ACCOUNT_VERIFICATION_SUCCESS_EVENT,
          email,
        }),
      });
      setTimeout(
        () =>
          history.push({
            pathname: '/login',
          }),
        3000,
      );
    } else {
      setVisible(true);
    }
  }
  useMountEffect(doRequest);
  function redirectHome() {
    history.push({
      pathname: '/login',
    });
  }
  return (
    <div>
      {visible === true ? (
        <div>
          <Col offset={5}>
            <Section>
              <Wrapper>
                <Logo justifyCenter onClick={redirectHome}>
                  <img src={ENERLLY_LOGIN_LOGO} alt="enerlly logo" />
                </Logo>
                <Paragraph>Energy Management System</Paragraph>
                <Result
                  status="warning"
                  title="There are some problems with your operation. We have started working on it ."
                  extra={
                    <Button type="primary" key="console" onClick={redirectHome}>
                      Login Page
                    </Button>
                  }
                />
              </Wrapper>
            </Section>
          </Col>
        </div>
      ) : null}
    </div>
  );
}

export default Register;
