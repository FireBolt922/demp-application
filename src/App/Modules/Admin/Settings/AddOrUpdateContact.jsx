import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Typography,
  Select,
  notification,
  Row,
  Col,
} from 'antd';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { network } from 'react-hooks';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import { ApiSuspense } from 'App/Common/UIComponents';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { SUCCESS_ALERT_MESSAGE } from './Setting.constants';
import { staffUserList, updateContact, addContact } from './Setting.Service';
import {
  CustomCheckCircleOutlined,
  CustomClosedCircleOutlined,
} from './Setting.styled';
import './Setting.css';
import { staffListTransformer } from './Setting.utilities';

const { Text } = Typography;
const { Option } = Select;
function AddOrUpdateContact({ selectedParams, successFunc, contactList }) {
  const [form] = Form.useForm();
  const { plantID } = useParams(); // URL Plant ID

  const {
    response: staffListData,
    network: metaStaffListData,
  } = network.useNetwork(staffUserList, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: staffListTransformer,
  });

  // Add Contact API Call
  const { call: addContactReqCall } = network.useNetwork(addContact, {
    auto: false,
  });
  // Update Contact API Call
  const { call: updateContactReqCall } = network.useNetwork(updateContact, {
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
      email: selectedParams.email,
      phoneNumber: selectedParams.phoneNumber,
    });
  }, [selectedParams, form]);

  const onFinish = async (values) => {
    const formData = {
      email: values.email,
      phone_number: values.phoneNumber,
      is_active: true,
    };
    let resp;
    if (selectedParams.id) {
      const updateFormData = {
        id: values.id,
        email: values.email,
        phone_number: values.phoneNumber,
      };
      resp = await updateContactReqCall(plantID, updateFormData);
    } else {
      resp = await addContactReqCall(plantID, formData);
    }
    const [, state] = resp;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      form.resetFields();
      openNotification();
      successFunc();
    } else {
      notification.open({
        description: SUCCESS_ALERT_MESSAGE,
        icon: <CustomClosedCircleOutlined />,
      });
    }
  };

  const emails = [];
  const filteredEmails = [];
  if (contactList) {
    contactList.forEach((item) => {
      emails.push(item.email);
    });
  }
  if (staffListData.staffListData) {
    staffListData.staffListData.forEach((item) => {
      if (!emails.includes(item.email) && item.email !== '') {
        filteredEmails.push(item);
      }
    });
  }

  return (
    <ApiSuspense meta={metaStaffListData}>
      <Form form={form} onFinish={onFinish}>
        {selectedParams.id ? (
          <div>
            {Object.keys(selectedParams).length === 0 ? null : (
              <Form.Item name="id" hidden rules={[{ required: true }]} />
            )}
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter Email!' }]}
            >
              <Select placeholder="Select Email" disabled>
                {contactList
                  ? contactList.map((item) => {
                      return (
                        <Option key={item.id} value={item.email}>
                          {item.email}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  min: 10,
                  max: 10,
                  required: true,
                  message: 'Enter valid contact number',
                },
              ]}
            >
              <Input placeholder="Contact Number" type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </Form.Item>
          </div>
        ) : (
          <div>
            {filteredEmails.length ? (
              <div>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please enter Email!' }]}
                >
                  <Select placeholder="Select Email">
                    {staffListData.staffListData
                      ? filteredEmails.map((item) => {
                          return (
                            <Option key={item.id} value={item.email}>
                              {item.email}
                            </Option>
                          );
                        })
                      : null}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      min: 10,
                      max: 10,
                      required: true,
                      message: 'Enter valid contact number',
                    },
                  ]}
                >
                  <Input placeholder="Contact Number" type="number" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    SUBMIT
                  </Button>
                </Form.Item>
              </div>
            ) : (
              <Row>
                <Col span={24}>
                  <Wrapper align="center">
                    <Text level={5}>
                      All registered Emails have been added to notification
                      list.
                    </Text>
                  </Wrapper>
                </Col>
              </Row>
            )}
          </div>
        )}
      </Form>
    </ApiSuspense>
  );
}
AddOrUpdateContact.propTypes = {
  selectedParams: PropTypes.object.isRequired,
  successFunc: PropTypes.func.isRequired,
  contactList: PropTypes.object.isRequired,
};
export default AddOrUpdateContact;
