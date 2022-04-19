import React from 'react';
import { Form, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import * as network from 'react-hooks/network/network';
import {
  ENERLLY_LOGIN_LOGO,
  ENERLLY_TAG_LINE,
} from 'App/Constants/app.constants';
import { FORGOT_PASSWORD_SUCCESS_EVENT } from 'App/Common/UIComponents/SuccessMessage/SuccessMessage.constants';
import { stringifyUrlParam } from 'utilities/url';
import { ForgotPasswordPostReq } from './ForgotPassword.service';
import { InputTag, SubmitButton, Section, Logo } from './ForgotPassword.styled';

const { Title, Paragraph } = Typography;

function ForgotPassword() {
  const { call: ForgotPasswordPostReqCall } = network.useNetwork(
    ForgotPasswordPostReq,
    {
      auto: false,
    },
  );
  const history = useHistory();
  const onFinish = async (values) => {
    const response = await ForgotPasswordPostReqCall(values);
    if (response[1].state === 'success') {
      history.push({
        pathname: '/success',
        search: stringifyUrlParam({
          event_type: FORGOT_PASSWORD_SUCCESS_EVENT,
          email: values.email,
        }),
      });
    }
  };
  function homeClick() {
    history.push({
      pathname: '/login',
    });
  }
  return (
    <Section>
      <Logo justifyCenter onClick={homeClick}>
        <img src={ENERLLY_LOGIN_LOGO} alt="enerlly logo" />
      </Logo>
      <Paragraph>{ENERLLY_TAG_LINE}</Paragraph>
      <Title level={5}>FORGOT PASSWORD</Title>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <InputTag prefix={<UserOutlined />} placeholder="Email ID" />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            SUBMIT
          </SubmitButton>
        </Form.Item>
      </Form>
    </Section>
  );
}

export default ForgotPassword;
