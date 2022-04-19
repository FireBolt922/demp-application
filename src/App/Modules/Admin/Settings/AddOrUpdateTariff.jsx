import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { network } from 'react-hooks';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import { updatePlantTariff, addPlantTariff } from './Setting.Service';
import { CustomCheckCircleOutlined, CustomInputNumber } from './Setting.styled';
import { SUCCESS_ALERT_MESSAGE } from './Setting.constants';
import './Setting.css';

const { Text } = Typography;

function AddOrUpdateTariff({ selectedParams, successFunc }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { plantID } = useParams(); // URL Plant ID

  // Add Staff API Call
  const { call: addTariffReqCall } = network.useNetwork(addPlantTariff, {
    auto: false,
  });
  // Update Tariff API Call
  const { call: updateTariffReqCall } = network.useNetwork(updatePlantTariff, {
    auto: false,
  });
  const openNotification = () => {
    notification.open({
      description: SUCCESS_ALERT_MESSAGE,
      icon: <CustomCheckCircleOutlined />,
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      id: selectedParams.id,
      name: selectedParams.name,
      description: selectedParams.description,
      value: selectedParams.value,
    });
  }, [selectedParams, form]);

  const onFinish = async (values) => {
    const formData = {
      name: values.name,
      description: values.description,
      value: values.value,
    };
    let resp;
    if (selectedParams.id) {
      const updateFormData = {
        id: values.id,
        name: values.name,
        description: values.description,
        value: Number(values.value),
      };
      resp = await updateTariffReqCall(plantID, updateFormData);
    } else {
      resp = await addTariffReqCall(plantID, formData);
    }
    const [, state] = resp;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      openNotification();
      form.resetFields();
      successFunc();
    } else {
      setVisible(true);
    }
  };
  return (
    <Form form={form} onFinish={onFinish}>
      {selectedParams.id ? (
        <div>
          <Form.Item name="name">
            <Input disabled />
          </Form.Item>
          <Form.Item name="id" hidden rules={[{ required: true }]} />
        </div>
      ) : (
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter Name!' }]}
        >
          <Input
            placeholder="Name"
            onChange={() => {
              setVisible(false);
            }}
          />
        </Form.Item>
      )}

      {visible ? <Text type="danger">Name is not a valid choice</Text> : null}
      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Please enter Description!' }]}
      >
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item
        name="value"
        rules={[{ required: true, message: 'Please enter Value!' }]}
      >
        <CustomInputNumber placeholder="Value" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </Form.Item>
    </Form>
  );
}
AddOrUpdateTariff.propTypes = {
  selectedParams: PropTypes.object.isRequired,
  successFunc: PropTypes.func.isRequired,
};
export default AddOrUpdateTariff;
