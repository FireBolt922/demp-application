import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Space, notification } from 'antd';
import PropTypes from 'prop-types';
import { network } from 'react-hooks';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import { CheckCircleOutlined } from '@ant-design/icons';
import { AddStaffButton } from '../Staff.styled';
import { ALERT_MESSAGE } from '../Staff.constants';
import {
  addStaff,
  getAllDesignationInfo,
  getAllPlantInfo,
  updateStaff,
} from '../Staff.service';
import {
  staffDesignationTransformer,
  staffPlantTransformer,
} from '../Staff.utilities';

function StaffForm({
  selectedParams,
  successFunc,
  verifiedUserDetails,
  changeState,
}) {
  const [selectedUserData, setSelectedUserData] = useState(selectedParams);

  // Designation API Call
  const {
    response: designationList,
    network: metaDesignationList,
  } = network.useNetwork(getAllDesignationInfo, {
    auto: true,
    transformer: staffDesignationTransformer,
  });

  // Plant API Call
  const { response: allPlantData, network: metaPlantData } = network.useNetwork(
    getAllPlantInfo,
    {
      auto: true,
      transformer: staffPlantTransformer,
    },
  );

  // Add Staff API Call
  const { call: addStaffReqCall } = network.useNetwork(addStaff, {
    auto: false,
  });

  // Update Staff API Call
  const { call: updateStaffReqCall } = network.useNetwork(updateStaff, {
    auto: false,
  });

  const [form] = Form.useForm();
  // This hook use to set form fields value
  useEffect(() => {
    form.setFieldsValue({
      userId: selectedParams.userId,
      username: selectedParams.username,
      designation: selectedParams.designationId,
      plantList: selectedParams.allowedPlants
        ? selectedParams.allowedPlants.map((data) => data.id)
        : [],
    });
  }, [selectedParams, form]);

  // Notification Function
  const openNotification = (data) => {
    let message;
    if (data) {
      message = ALERT_MESSAGE.UPDATE;
    } else {
      message = ALERT_MESSAGE.CREATE;
    }
    notification.open({
      description: message,
      icon: <CheckCircleOutlined style={{ color: 'green' }} />,
    });
  };

  const onFinish = async (values) => {
    const userID = verifiedUserDetails.userId || selectedParams.userId;
    const formData = {
      user: userID,
      designation: values.designation,
      plants: values.plantList,
    };
    // This function is used to create and update staff
    let apiResponse;
    if (selectedParams.id) {
      // Update staff
      apiResponse = await updateStaffReqCall(selectedParams.id, formData);
    } else {
      // Create Staff
      apiResponse = await addStaffReqCall(formData);
    }
    const [, state] = apiResponse;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      if (selectedParams.userId) {
        openNotification(selectedParams.id);
      } else {
        openNotification();
      }
      form.resetFields();
      successFunc();
      setSelectedUserData({});
    }
  };
  const onReset = () => {
    changeState(false);
  };
  return (
    <ApiSuspense meta={[metaDesignationList, metaPlantData]}>
      <>
        <Form form={form} onFinish={onFinish}>
          {selectedUserData.id ? (
            <>
              <Form.Item name="username">
                <Input disabled />
              </Form.Item>
              <Form.Item name="userId" hidden rules={[{ required: true }]} />
            </>
          ) : (
            <>
              <Form.Item name="username">
                <Input
                  placeHolder={verifiedUserDetails.userName}
                  DefaultValue={verifiedUserDetails.userName}
                  disabled
                />
              </Form.Item>
            </>
          )}

          <Form.Item
            name="designation"
            rules={[
              { required: true, message: 'Please select your Designation!' },
            ]}
          >
            <Select placeholder="Please Select Designation">
              {designationList.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.designationName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="plantList"
            rules={[{ required: true, message: 'Please select your Plant!' }]}
          >
            <Select
              mode="multiple"
              name="plantList"
              placeholder="Please Select Plant"
              optionLabelProp="label"
            >
              {allPlantData.map((item) => (
                <Select.Option
                  value={item.id}
                  key={item.id}
                  label={item.plantName}
                >
                  {item.plantName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {selectedParams.id ? (
            <Form.Item>
              <AddStaffButton type="primary" htmlType="submit">
                Submit
              </AddStaffButton>
            </Form.Item>
          ) : (
            <Space>
              <Form.Item>
                <AddStaffButton type="primary" htmlType="submit">
                  Submit
                </AddStaffButton>
              </Form.Item>
              <Form.Item>
                <AddStaffButton type="primary" onClick={onReset}>
                  Reset
                </AddStaffButton>
              </Form.Item>
            </Space>
          )}
        </Form>
      </>
    </ApiSuspense>
  );
}

StaffForm.propTypes = {
  selectedParams: PropTypes.object.isRequired,
  successFunc: PropTypes.func.isRequired,
  verifiedUserDetails: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default StaffForm;
