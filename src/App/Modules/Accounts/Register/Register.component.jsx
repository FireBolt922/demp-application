import React from 'react';
import { Form, Image, Typography } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import * as network from 'react-hooks/network/network';
import { stringifyUrlParam } from 'utilities/url';
import { RegisterUser } from 'App/Modules/Accounts/Register/Register.service';
import {
  InputTag,
  SignupButton,
  Section,
} from 'App/Modules/Accounts/Register/Register.styled';
import {
  PASSWORD_VALIDATION_RULE,
  MATCH_CONFIRM_PASSWORD_RULE,
} from 'App/Common/Functionalities/PasswordValidationRules/PasswordValidationRules';
import {
  ENERLLY_LOGIN_LOGO,
  API_NETWORK_STATUS,
  ENERLLY_TAG_LINE,
} from 'App/Constants/app.constants';
import { SIGNUP_SUCCESS_EVENT } from 'App/Common/UIComponents/SuccessMessage/SuccessMessage.constants';
import { CenterBox } from './Register.styled';

const { Title, Paragraph } = Typography;

function Register() {
  const { call: registerReqCall } = network.useNetwork(RegisterUser, {
    auto: false,
  });

  const history = useHistory();

  const onFinish = async (values) => {
    const value = {
      first_name: values.name.split(' ')[0],
      last_name: values.name.substring(values.name.split(' ')[0].length).trim(),
      email: values.email,
      password: values.newPassword,
    };
    const resp = await registerReqCall(value);

    const [, state] = resp;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      history.push({
        pathname: '/success',
        search: stringifyUrlParam({
          event_type: SIGNUP_SUCCESS_EVENT,
          email: values.email,
        }),
      });
    }
  };

  return (
    <Section>
      <a href="/login">
        <Image src={ENERLLY_LOGIN_LOGO} preview={false} />
      </a>
      <Paragraph>{ENERLLY_TAG_LINE}</Paragraph>
      <CenterBox>
        <Title level={5}>CREATE ACCOUNT</Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <InputTag prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <InputTag prefix={<MailOutlined />} placeholder="Email ID" />
          </Form.Item>
          <Form.Item name="newPassword" rules={PASSWORD_VALIDATION_RULE}>
            <InputTag
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item name="confirmPassword" rules={MATCH_CONFIRM_PASSWORD_RULE}>
            <InputTag.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <SignupButton type="primary" htmlType="submit">
              SUBMIT
            </SignupButton>
          </Form.Item>
        </Form>
      </CenterBox>
    </Section>
  );
}

export default Register;
