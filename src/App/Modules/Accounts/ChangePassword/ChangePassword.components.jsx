import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_NETWORK_STATUS, PAGE } from 'App/Constants/app.constants';
import { Input, Form, Button, Typography, Modal } from 'antd';
import { DividerPadding } from 'App/Common/UIComponents/CustomTable/CustomTableStyled';
import { network } from 'react-hooks';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import {
  OLD_PASSWORD_ENTRY_RULE,
  PASSWORD_VALIDATION_RULE,
  MATCH_CONFIRM_PASSWORD_RULE,
} from 'App/Common/Functionalities/PasswordValidationRules/PasswordValidationRules';
import { CenterBox, Section } from './ChangePassword.styled';
import { changePasswordService } from './ChangePassword.services';

const { Title } = Typography;

function ChangePassword() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const userInfo = customLocalStorage.getItem('userInfo', [], 'json');
  const plantId = customLocalStorage.getItem('selectedPlant', '', 'str');
  const acl = customLocalStorage.getItem('acl', [], 'json');
  const org = acl[0].organisation__slug_name;
  const [isCurrentPassword, setIsCurrentPassword] = useState('');
  const [isNewPassword, setIsNewPassword] = useState('');
  const [isConfirmPassword, setIsConfirmPassword] = useState('');

  const { call: changePasswordCall } = network.useNetwork(
    changePasswordService,
    {
      auto: false,
    },
  );
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
    history.push({ pathname: `org/${org}/${plantId}${PAGE.DASHBOARD}` });
  }
  function onCancel() {
    setVisible(false);
  }
  function onEdit() {
    setWrongPassword(false);
  }
  return (
    <Section>
      <Title level={4}>Change Password</Title>
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
              <Input.Password
                placeholder="Current Password"
                onChange={(e) => setIsCurrentPassword(e.target.value)}
              />
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
            <Input
              placeholder="New Password"
              onChange={(e) => setIsNewPassword(e.target.value)}
            />
          </Form.Item>
          <strong>Confirm New Password </strong>
          <Form.Item
            name="confirm"
            dependencies={['newPassword']}
            hasFeedback
            rules={MATCH_CONFIRM_PASSWORD_RULE}
          >
            <Input.Password
              placeholder="Confirm New Password"
              onChange={(e) => setIsConfirmPassword(e.target.value)}
            />
          </Form.Item>
          {(!isCurrentPassword || !isNewPassword || !isConfirmPassword) && (
            <Form.Item>
              <Button htmlType="submit" type="primary" disabled="false">
                Submit
              </Button>
            </Form.Item>
          )}
          {isCurrentPassword && isNewPassword && isConfirmPassword && (
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          )}
        </Form>
      </CenterBox>
    </Section>
  );
}

export default ChangePassword;
