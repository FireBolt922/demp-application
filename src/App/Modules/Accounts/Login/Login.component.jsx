import React, { useState } from 'react';
import {
  CXO_DESIGNATIONS,
  PRODUCTION_ENTRY_USER_DESIGNATION,
  PLANT_HEAD_DESIGNATION,
  ENERLLY_LOGIN_LOGO,
  ENERLLY_TAG_LINE,
} from 'App/Constants/app.constants';
import { Form, Input, Image, Typography, notification } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { dummyResp } from './Login.utilities';

import {
  ForgotPassword,
  LoginButton,
  Section,
  WarningMessage,
} from './Login.styled';

const { Title, Paragraph } = Typography;
function Login() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const userToken = customLocalStorage.getItem('userToken');
  if (userToken !== undefined) {
    const acl = customLocalStorage.getItem('acl', [], 'json');
    const orgName = acl[0].organisation__slug_name;
    const plantID = customLocalStorage.getItem('selectedPlant');
    const selectedUser = customLocalStorage.getItem('acl', [], 'json');
    const designation = selectedUser[0].designation__name.toUpperCase();
    if (designation === CXO_DESIGNATIONS) {
      history.push({
        pathname: `/org/${orgName}`,
      });
    }
    if (designation === PRODUCTION_ENTRY_USER_DESIGNATION) {
      history.push({
        pathname: `/org/${orgName}/${plantID}/plant-production`,
      });
    }
    if (designation === PLANT_HEAD_DESIGNATION) {
      history.push({
        pathname: `/org/${orgName}/${plantID}/dashboard`,
      });
    }
  }
  async function onFinish(values) {
    if (
      values.username === 'testing@demo.com' &&
      values.password === 'AsdfG@098'
    ) {
      const resp = dummyResp;
      if (resp.acl.length === 0) {
        setVisible(true);
      } else {
        customLocalStorage.setValue('userToken', resp.token);
        customLocalStorage.setValue('acl', resp.acl);
        customLocalStorage.setValue('plantName', resp.acl[0].plants__name);
        customLocalStorage.setValue('userInfo', {
          email: resp.email,
          userId: resp.user_id,
          // acl[0].id staff ID
          staffId: resp.acl[0].id,
        });
        customLocalStorage.setValue('selectedPlant', resp.acl[0].plants__id);
        customLocalStorage.setValue(
          'tourFlag',
          resp.acl[0].config.tour_flag.full_software,
        );
        const selectedUser = customLocalStorage.getItem('acl', [], 'json');
        const designation = selectedUser[0].designation__name.toUpperCase();
        const orgName = selectedUser[0].organisation__slug_name;
        const plantID = customLocalStorage.getItem('selectedPlant');
        /**
         * Unable to reload Navbar with history.push()
         * hence using window.location.href
         * This will be fixed in next revisit
         */
        if (designation === CXO_DESIGNATIONS) {
          window.location.href = `/org/${orgName}`;
        }
        if (designation === PRODUCTION_ENTRY_USER_DESIGNATION) {
          window.location.href = `/org/${orgName}/${plantID}/plant-production`;
        }
        if (designation === PLANT_HEAD_DESIGNATION) {
          window.location.href = `org/${orgName}/${plantID}/dashboard`;
        }
      }
    } else {
      notification.error({
        message: 'Something went wrong',
        description: 'Verify your password',
      });
    }
  }

  function disableMessage() {
    setVisible(false);
  }
  return (
    <Section>
      <Title level={5}>LOG IN</Title>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {visible ? (
          <WarningMessage>No Plants Registered. Contact Admin </WarningMessage>
        ) : null}
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email ID"
            onChange={disableMessage}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            onChange={disableMessage}
          />
        </Form.Item>
        <Form.Item>
          <LoginButton
            name="loginSubmitButton"
            type="primary"
            htmlType="submit"
          >
            CONTINUE
          </LoginButton>
        </Form.Item>
        <Form.Item>
          <ForgotPassword>
            <Link to="/forgot-password">Forgot password?</Link>
          </ForgotPassword>
        </Form.Item>
        <Form.Item>
          <Link to="/register">New Here? Create account</Link>
        </Form.Item>
      </Form>
    </Section>
  );
}

export default Login;
