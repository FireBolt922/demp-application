import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Typography } from 'antd';
import PropTypes from 'prop-types';
import { network } from 'react-hooks';
import { AddStaffButton } from '../Staff.styled';
import { verifyUserService } from '../Staff.service';
import { verifyUserTransformer } from '../Staff.utilities';
import StaffForm from './StaffForm';

const { Text } = Typography;
function AddOrUpdateStaff({ selectedParams, successFunc }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [verifiedUserDetails, serVerifiedUserDetails] = useState({
    userId: null,
    userName: null,
  });

  const { plantID } = useParams();
  const [form] = Form.useForm();
  // Verify user call
  const { call: verifyUserCall } = network.useNetwork(verifyUserService, {
    auto: false,
    transformer: verifyUserTransformer,
  });

  function changeVerifyState() {
    setIsFormVisible(false);
  }

  const verifyUser = async (values) => {
    if (values.emailId) {
      const [resp, meta] = await verifyUserCall(plantID, values.emailId);
      if (meta.state === 'success') {
        if (resp.isUserRegistered === true) {
          setIsFormVisible(true);
          serVerifiedUserDetails({
            userId: resp.userId,
            userName: values.emailId,
          });
        } else {
          setMessage(resp.message);
          form.resetFields();
          setIsFormVisible(false);
        }
      } else {
        setMessage('Something went wrong!');
      }
    } else {
      setMessage('Enter Email Id!');
    }
  };

  const onChangeHandleMessage = () => {
    setMessage(null);
  };
  const changeState = (state) => {
    setIsFormVisible(state);
  };
  return (
    <>
      {selectedParams.id ? (
        <StaffForm
          selectedParams={selectedParams}
          successFunc={successFunc}
          verifiedUserDetails={verifiedUserDetails}
          changeVerifyState={changeVerifyState}
          changeState={changeState}
        />
      ) : (
        <>
          {isFormVisible === false ? (
            <Form form={form} onFinish={verifyUser}>
              {message ? <Text type="danger">{message}</Text> : null}
              <Form.Item name="emailId" onChange={onChangeHandleMessage}>
                <Input placeholder="Enter Email" />
              </Form.Item>
              <AddStaffButton type="primary" htmlType="submit">
                Verify
              </AddStaffButton>
            </Form>
          ) : (
            <StaffForm
              selectedParams={selectedParams}
              successFunc={successFunc}
              verifiedUserDetails={verifiedUserDetails}
              changeVerifyState={changeVerifyState}
              changeState={changeState}
            />
          )}
        </>
      )}
    </>
  );
}

AddOrUpdateStaff.propTypes = {
  selectedParams: PropTypes.object.isRequired,
  successFunc: PropTypes.func.isRequired,
};

export default AddOrUpdateStaff;
