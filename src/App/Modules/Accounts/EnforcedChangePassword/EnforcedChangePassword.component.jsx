import React, { useState } from 'react';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import { Input, Form, Button, Typography, Modal, Col } from 'antd';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import { network } from 'react-hooks';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import LogoutFunctionality from 'App/Common/Functionalities/LogoutFunctionality';
import {
  OLD_PASSWORD_ENTRY_RULE,
  PASSWORD_VALIDATION_RULE,
  MATCH_CONFIRM_PASSWORD_RULE,
} from 'App/Common/Functionalities/PasswordValidationRules/PasswordValidationRules';
import { CenterBox, Section } from './EnforcedChangePassword.styled';
import { changePasswordService } from './EnforcedChangePassword.services';

const { Title } = Typography;

function EnforcedChangePassword() {
  const userInfo = customLocalStorage.getItem('userInfo', [], 'json');
  const { call: changePasswordCall } = network.useNetwork(
    changePasswordService,
    {
      auto: false,
    },
  );
  const [wrongPassword, setWrongPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const changePassword = async (data) => {
    if (
      data.newPassword === data.confirm &&
      data.oldPassword !== data.newPassword
    ) {
      const form = {
        email: userInfo.email,
        old_password: data.oldPassword,
        new_password: data.newPassword,
      };

      const status = await changePasswordCall(form);
      if (status[1].state === API_NETWORK_STATUS.SUCCESS) {
        setVisible(true);
      } else {
        setWrongPassword(true);
      }
    }
  };
  function onOk() {
    LogoutFunctionality();
    // Nav Bar is not refreshed hence using window.location.href
    window.location.href = '/login';
  }
  function onCancel() {
    setVisible(false);
  }
  function onEdit() {
    setWrongPassword(false);
  }
  function forgetPassword() {
    LogoutFunctionality();
    window.location.href = '/forgot-password';
  }
  return (
    <Col offset={5}>
      <Section>
        <Title level={4}>Password Change Required!</Title>
        Due to security reasons we recommend you to change your password!
        <DividerPadding />
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
            <p>Your Password has been changed Successfully</p>
          </Modal>
        ) : null}
        <CenterBox>
          <Form onFinish={changePassword}>
            <strong>Current Password </strong>
            {wrongPassword === false ? (
              <Form.Item name="oldPassword" rules={OLD_PASSWORD_ENTRY_RULE}>
                <Input.Password placeholder="Current Password" />
              </Form.Item>
            ) : (
              <Form.Item
                name="oldPassword"
                rules={OLD_PASSWORD_ENTRY_RULE}
                validateStatus="error"
                help="Wrong Old Password"
                onClick={onEdit}
              >
                <Input.Password placeholder="Enter Old Password" />
              </Form.Item>
            )}

            <strong>New Password </strong>
            <Form.Item
              name="newPassword"
              rules={PASSWORD_VALIDATION_RULE}
              hasFeedback
            >
              <Input placeholder="New Password" />
            </Form.Item>
            <strong>Confirm New Password </strong>
            <Form.Item
              name="confirm"
              dependencies={['newPassword']}
              hasFeedback
              rules={MATCH_CONFIRM_PASSWORD_RULE}
            >
              <Input.Password placeholder="Confirm New Password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <a href="/forgot-password" onClick={forgetPassword}>
            {/* This is done because href tag cannot be blank */}I dont remember
            my Old Password
          </a>
        </CenterBox>
      </Section>
    </Col>
  );
}

export default EnforcedChangePassword;
