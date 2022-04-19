import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  API_NETWORK_STATUS,
  ENERLLY_LOGIN_LOGO,
} from 'App/Constants/app.constants';
import { Input, Form, Button, Typography, Modal, Result } from 'antd';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import { network } from 'react-hooks';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import useRouter from 'react-hooks/router';
import { Section, Logo } from './ResetPassword.styled';
import { ResetPasswordPostReq } from './ResetPassword.services';

const { Title } = Typography;
const { Paragraph } = Typography;
function ChangePassword() {
  const router = useRouter();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [resetFail, setResetFail] = useState(false);

  const { email, token } = router.query;
  const { call: resetPasswordCall } = network.useNetwork(ResetPasswordPostReq, {
    auto: false,
  });

  const resetPassword = async (data) => {
    if (data.newPassword === data.confirm) {
      const form = {
        email,
        token,
        password: data.newPassword,
      };

      const status = await resetPasswordCall(form);
      if (status[1].state === API_NETWORK_STATUS.SUCCESS) {
        setVisible(true);
      } else {
        setResetFail(true);
        setTimeout(() => {
          history.push({
            pathname: '/login',
          });
        }, 5000); // This function will redirect to login page after 5 seconds
      }
    }
  };
  function onOk() {
    history.push({ pathname: '/login' });
  }
  function onCancel() {
    setVisible(false);
  }

  return (
    <>
      {resetFail === true ? (
        <Section>
          <Wrapper>
            <Logo justifyCenter onClick={onOk}>
              <img src={ENERLLY_LOGIN_LOGO} alt="enerlly logo" />
            </Logo>
            <Paragraph>Energy Management System</Paragraph>
            <Result
              status="warning"
              title="There are some problems with your operation. We have started working in it ."
              extra={
                <Button type="primary" key="console" onClick={onOk}>
                  Login Page
                </Button>
              }
            />
          </Wrapper>
        </Section>
      ) : null}

      {visible === true ? (
        <Modal
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          footer={[
            <Button key="submit" type="primary" onClick={onOk}>
              Ok
            </Button>,
          ]}
        >
          <p>Your Password has been Changed Successfully. Please Login.</p>
        </Modal>
      ) : null}
      {resetFail === false ? (
        <Section>
          <Logo justifyCenter onClick={onOk}>
            <img src={ENERLLY_LOGIN_LOGO} alt="enerlly logo" />
          </Logo>
          <Paragraph>Energy Management System</Paragraph>
          <Title level={4}>Reset Password</Title>
          <DividerPadding />
          <Form onFinish={resetPassword}>
            <strong>New Password </strong>
            <Form.Item
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      getFieldValue('newPassword').match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^`_"~<>:/+/\\{}:;,=?'()[+(.*?)\]+//-])[A-Za-z\d@$!%*?&#^`_"~<>:/+/\\{}:;,=?'()/[+(.*?)\]+//-]{8,}$/,
                      )
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new TypeError(
                        'Please Enter 8 letter Aplha-numeric Password with Special character',
                      ),
                    );
                  },
                }),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      value &&
                      getFieldValue('newPassword') ===
                        getFieldValue('oldPassword')
                    ) {
                      return Promise.reject(
                        new TypeError(
                          'Old password and new password cannot be same',
                        ),
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
              hasFeedback
            >
              <Input placeholder="New Password" />
            </Form.Item>
            <strong>Confirm New Password </strong>
            <Form.Item
              name="confirm"
              dependencies={['newPassword']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new TypeError(
                        'The two passwords that you entered do not match!',
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm New Password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Section>
      ) : null}
    </>
  );
}

export default ChangePassword;
