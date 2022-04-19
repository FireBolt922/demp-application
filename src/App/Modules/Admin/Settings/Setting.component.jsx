import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import React, { useEffect, useState } from 'react';
import {
  Divider,
  Form,
  Button,
  Row,
  notification,
  Space,
  Col,
  Tooltip,
  Typography,
  Table,
  Modal,
  Switch,
} from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import ToolTip from 'App/Common/UIComponents/ToolTip/ToolTip';
import { INFORMATION } from 'App/Common/UIComponents/ToolTipInformation/ToolTipInformation';
import { useParams } from 'react-router-dom';
import * as network from 'react-hooks/network/network';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import {
  plantTariffTransformer,
  emailListTransformer,
  contractDemandTransformer,
} from './Setting.utilities';
import AddOrUpdateTariff from './AddOrUpdateTariff';
import {
  ContractDemandInput,
  CustomClosedCircleOutlined,
  CustomCheckCircleOutlined,
  ColDivider,
  CustomCol,
  CustomTitle,
  RowCenter,
  ContractCol,
} from './Setting.styled';
import {
  contractDemandService,
  updateContractDemand,
  getContactList,
  updateContact,
  plantTariffService,
} from './Setting.Service';
import {
  SUCCESS_ALERT_MESSAGE,
  FAILURE_ALERT_MESSAGE,
} from './Setting.constants';
import AddOrUpdateContact from './AddOrUpdateContact';
import './Setting.css';

const { Title } = Typography;
function Setting() {
  const [visible, setVisible] = useState(true);
  const [showEditPopupTariff, setShowEditPopupTariff] = useState(false);
  const [showEditPopupContact, setShowEditPopupContact] = useState(false);

  const [selectedData, setSelectedData] = useState({});
  const [form] = Form.useForm();

  const { plantID } = useParams(); // URL Plant ID

  const { call: updateContractDemandCall } = network.useNetwork(
    updateContractDemand,
    {
      auto: false,
    },
  );
  /** This is an API call for Contract Demand component */
  const {
    response: contractDemandData,
    call: contractDemandCall,
    network: metaContractDemandData,
  } = network.useNetwork(contractDemandService, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: contractDemandTransformer,
  });
  /** This is an API call for Tariff component */
  const {
    response: plantTariffData,
    call: plantTariffCall,
  } = network.useNetwork(plantTariffService, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: plantTariffTransformer,
  });
  /** This is an API call for Contact component */
  const {
    response: contactListData,
    call: contactListCall,
    network: metaContactListData,
  } = network.useNetwork(getContactList, {
    auto: true,
    autoCallArgs: [plantID],
    transformer: emailListTransformer,
  });
  const { call: updateContactReqCall } = network.useNetwork(updateContact, {
    auto: false,
  });
  /** This is an Function for Notification */
  const openNotification = () => {
    notification.open({
      description: SUCCESS_ALERT_MESSAGE,
      icon: <CustomCheckCircleOutlined />,
    });
  };
  /** This is an Function is for opening Tariff update/create Modal */
  function handleEditTariff(currentData) {
    setSelectedData(currentData);
    setShowEditPopupTariff(true);
  }
  /** This is an Function is for opening Contact update/create Modal */
  function handleEditContact(currentData) {
    setSelectedData(currentData);
    setShowEditPopupContact(true);
  }
  /** This is an Function is for closing Contact update/create Modal */
  const handleCancelContact = () => {
    setSelectedData({});
    setShowEditPopupContact(false);
  };
  /** This is an Function is for closing Tariff update/create Modal */
  const handleCancelTariff = () => {
    setSelectedData({});
    setShowEditPopupTariff(false);
  };

  /** This is an Function is for making a patch request to Update Contact details */
  const updateContactDetails = async (data, status) => {
    const updateFormData = {
      id: data.id,
      email: data.email,
      phone_number: data.phoneNumber,
      is_active: status,
    };

    const resp = await updateContactReqCall(plantID, updateFormData);

    const [, state] = resp;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      openNotification();
      contactListCall(plantID);
    } else {
      notification.open({
        description: FAILURE_ALERT_MESSAGE,
        icon: <CustomClosedCircleOutlined />,
      });
    }
  };
  /** This is an Function is for editing contract demand */
  const handleOnclick = () => {
    setVisible(false);
  };
  function statusSwitch(data) {
    return (
      <Switch
        checkedChildren="On"
        unCheckedChildren="Off"
        onChange={(switchValue) => updateContactDetails(data, switchValue)}
        checked={data.isActive}
      />
    );
  }
  /** This is an Function is for dispalying edit button in Tariff component */
  function renderActionsTariff(data) {
    return (
      <Space>
        <Button
          shape="circle"
          onClick={() => handleEditTariff(data)}
          icon={<EditOutlined />}
          size="middle"
        />
      </Space>
    );
  }
  /** This is an Function is for dispalying edit button in Contact component */
  function renderActionsContact(data) {
    return (
      <Space>
        <Button
          shape="circle"
          onClick={() => handleEditContact(data)}
          icon={<EditOutlined />}
          size="middle"
        />
      </Space>
    );
  }
  /** This is for declaring columns of Tariff component */
  const columnsTariff = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Actions',
      dataIndex: 'operation',
      render: (text, row) => renderActionsTariff(row),
    },
  ];
  /** This is for declaring columns of Contact component */
  const columnsContact = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contact',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (e, data) => statusSwitch(data),
    },
    {
      title: 'Actions',
      dataIndex: 'operation',
      render: (text, row) => renderActionsContact(row),
    },
  ];

  /** This Function is for updating Tariff component */
  function successTariff() {
    setShowEditPopupTariff(false);
    setSelectedData({});
    plantTariffCall(plantID);
  }
  /** This Function is for updating Contact component */
  function successContact() {
    setShowEditPopupContact(false);
    setSelectedData({});
    contactListCall(plantID);
  }

  /** This is an Function is for making a patch request to Update Contract Demand details */
  const onFinish = async (values) => {
    const value = {
      id: contractDemandData.id,
      name: contractDemandData.name,
      details: contractDemandData.details,
      plant_location: contractDemandData.plantLocation,
      contract_demand: values.contractDemand,
    };
    const resp = await updateContractDemandCall(plantID, value);

    const [, state] = resp;
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      openNotification();
      form.resetFields();
      setVisible(true);
      contractDemandCall(plantID);
    } else {
      notification.open({
        description: FAILURE_ALERT_MESSAGE,
        icon: <CustomClosedCircleOutlined />,
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      contractDemand: contractDemandData.contractDemand,
    });
  }, [form, contractDemandData]);

  /** This Function is for cancel Contract demand  */
  const handleCancel = () => {
    setVisible(true);
    form.setFieldsValue({
      contractDemand: contractDemandData.contractDemand,
    });
  };
  return (
    <>
      <Wrapper align="center">
        {contractDemandData ? (
          <div>
            <RowCenter>
              <Col span={24}>
                <Title level={5}>
                  Contract Demand
                  <ToolTip titleOfToolTip={INFORMATION.CONTRACT_DEMAND} />
                </Title>
              </Col>
            </RowCenter>
            <Divider />
            <ApiSuspense meta={metaContractDemandData}>
              <Form form={form} name="basic" onFinish={onFinish}>
                <RowCenter>
                  <ContractCol span={24}>
                    <Space>
                      <Form.Item
                        name="contractDemand"
                        rules={[
                          {
                            required: true,
                            message: 'Please Enter Contract Demand!',
                          },
                        ]}
                      >
                        <ContractDemandInput type="number" disabled={visible} />
                      </Form.Item>

                      {visible ? (
                        <Form.Item>
                          <Button
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={handleOnclick}
                          />
                        </Form.Item>
                      ) : (
                        <Form.Item>
                          <Space>
                            <Button
                              htmlType="submit"
                              shape="circle"
                              icon={<CheckOutlined />}
                            />
                            <Button
                              shape="circle"
                              icon={<CloseOutlined />}
                              onClick={handleCancel}
                            />
                          </Space>
                        </Form.Item>
                      )}
                    </Space>
                  </ContractCol>
                </RowCenter>
              </Form>
            </ApiSuspense>
          </div>
        ) : null}
      </Wrapper>
      <ColDivider />
      <Wrapper>
        <Row>
          <Col span={12} push={6}>
            <CustomTitle level={5}>
              Tariff
              <ToolTip titleOfToolTip={INFORMATION.TARIFF} />
            </CustomTitle>
          </Col>
          <CustomCol span={12}>
            <Tooltip title={INFORMATION.MODIFY_TARIFF}>
              <Button
                disabled
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={() => {
                  setShowEditPopupTariff(true);
                }}
              />
            </Tooltip>
          </CustomCol>
        </Row>
        <Divider />
        <ApiSuspense meta={metaContractDemandData}>
          <Table
            pagination={{ position: ['bottomCenter'] }}
            dataSource={plantTariffData.plantTariffList}
            columns={columnsTariff}
          />
          <Modal
            title={selectedData.id ? 'Update Tariff' : 'Add Tariff'}
            visible={showEditPopupTariff}
            onCancel={handleCancelTariff}
            footer={null}
          >
            <AddOrUpdateTariff
              selectedParams={selectedData}
              successFunc={successTariff}
            />
          </Modal>
        </ApiSuspense>
      </Wrapper>
      <ColDivider />
      <Wrapper>
        <Row>
          <Col span={12} push={6}>
            <CustomTitle level={5}>
              Notification Email Address
              <ToolTip
                titleOfToolTip={INFORMATION.NOTIFICATION_EMAIL_ADDRESS}
              />
            </CustomTitle>
          </Col>
          <CustomCol span={12}>
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => {
                setShowEditPopupContact(true);
              }}
            />
          </CustomCol>
        </Row>
        <Divider />
        <ApiSuspense meta={metaContactListData}>
          <Table
            pagination={{ position: ['bottomCenter'] }}
            dataSource={contactListData.contactListData}
            columns={columnsContact}
          />

          <Modal
            title={selectedData.id ? 'Update Email' : 'Add Email'}
            visible={showEditPopupContact}
            onCancel={handleCancelContact}
            footer={null}
          >
            <AddOrUpdateContact
              contactList={contactListData.contactListData}
              selectedParams={selectedData}
              successFunc={successContact}
            />
          </Modal>
        </ApiSuspense>
      </Wrapper>
    </>
  );
}

export default Setting;
