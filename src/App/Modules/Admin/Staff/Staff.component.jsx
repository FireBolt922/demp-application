import React, { useState } from 'react';
import {
  Table,
  Button,
  Space,
  Row,
  Modal,
  Tag,
  Typography,
  notification,
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { API_NETWORK_STATUS } from 'App/Constants/app.constants';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import AddOrUpdateStaff from './components/AddOrUpdateStaff';
import { ALERT_MESSAGE } from './Staff.constants';

import { AddStaffCol, ColPadding, DividerPadding } from './Staff.styled';
import { getAllStaffInfo, deleteStaff } from './Staff.service';
import { staffListTransformer } from './Staff.utilities';

const { Title } = Typography;
function Staff() {
  // Staff List API Call
  const {
    response: allStaffData,
    network: metaStaffList,
    call: getAllStaffInfoCall,
  } = network.useNetwork(getAllStaffInfo, {
    auto: true,
    transformer: staffListTransformer,
  });

  const { call: deleteStaffReqCall } = network.useNetwork(deleteStaff, {
    transformer: staffListTransformer,
  });
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  function handleEdit(currentData) {
    setSelectedData(currentData);
    setShowEditPopup(true);
  }
  const handleCancel = () => {
    setSelectedData({});
    setShowEditPopup(false);
    setShowDeletePopup(false);
  };

  // Notification function after deleting the staff
  const openNotification = () => {
    notification.open({
      description: ALERT_MESSAGE.DELETE,
      icon: <CheckCircleOutlined style={{ color: 'green' }} />,
    });
  };
  // This function is used to Delete the staff
  const handleDelete = async (staffId) => {
    const [, state] = await deleteStaffReqCall(staffId);
    if (state.state === API_NETWORK_STATUS.SUCCESS) {
      setShowDeletePopup(false);
      getAllStaffInfoCall();
      openNotification();
    }
    setSelectedData({});
  };

  function successFullyCrudOperation() {
    setShowEditPopup(false);
    getAllStaffInfoCall();
    setSelectedData({});
  }
  function handleDeleteAction(currentData) {
    setSelectedData(currentData);
    setShowDeletePopup(true);
  }

  function renderPlantTags(allowedPlants) {
    return (
      <>
        {allowedPlants.map((plantDetails) => {
          const color = 'geekblue';
          return (
            <Tag color={color} key={plantDetails.name}>
              {plantDetails.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    );
  }

  function renderActions(data) {
    return (
      <Space>
        <Button
          shape="circle"
          onClick={() => handleEdit(data)}
          icon={<EditOutlined />}
          size="middle"
        />
        <Button
          shape="circle"
          onClick={() => handleDeleteAction(data)}
          icon={<DeleteOutlined />}
        />
      </Space>
    );
  }

  const columns = [
    {
      title: 'Staff ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Designation',
      dataIndex: 'designationName',
      key: 'designationName',
    },
    {
      title: 'Plants',
      key: 'allowedPlants',
      dataIndex: 'allowedPlants',
      render: (allowedPlants) => renderPlantTags(allowedPlants),
    },
    {
      title: 'Actions',
      dataIndex: 'operation',
      render: (text, row) => renderActions(row),
    },
  ];

  return (
    <Row>
      <ColPadding span={24}>
        <Wrapper>
          <Row>
            <AddStaffCol span={12} align="left">
              <Title level={5}>Staff Details</Title>
            </AddStaffCol>
            <AddStaffCol span={12} align="right">
              <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={() => {
                  setShowEditPopup(true);
                }}
              />
            </AddStaffCol>
          </Row>
          <DividerPadding />
          <ApiSuspense meta={metaStaffList}>
            <Table
              dataSource={allStaffData}
              columns={columns}
              pagination={{ position: ['bottomCenter'] }}
            />
            <Modal
              title={selectedData.id ? 'Update Staff' : 'Add Staff'}
              visible={showEditPopup}
              onCancel={handleCancel}
              footer={null}
            >
              <AddOrUpdateStaff
                selectedParams={selectedData}
                successFunc={successFullyCrudOperation}
                handleCancel={handleCancel}
              />
            </Modal>
            <Modal
              title="Delete Staff?"
              visible={showDeletePopup}
              onCancel={() => {
                setShowDeletePopup(false);
                setSelectedData({});
              }}
              onOk={() => handleDelete(selectedData.id)}
            >
              Are you sure you want to delete staff account for{' '}
              {selectedData.username}?
            </Modal>
          </ApiSuspense>
        </Wrapper>
      </ColPadding>
    </Row>
  );
}

export default Staff;
