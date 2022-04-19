import React from 'react';
import * as network from 'react-hooks/network/network';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { Row, Col, Typography, Divider, Table } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { GetProfile } from './Profile.service';
import { ProfileTransformer } from './Profile.utilities';
import { CenterText, DividerPadding } from './Profile.styled';

const { Title } = Typography;

function Profile() {
  const { response: profileData, network: metaProfile } = network.useNetwork(
    GetProfile,
    {
      auto: true,
      transformer: ProfileTransformer,
    },
  );
  const COLUMNS = [
    {
      title: <strong>Plant Name</strong>,
      dataIndex: 'plantName',
      key: 'plantName',
      align: 'center',
    },
    {
      title: <strong>Designation</strong>,
      dataIndex: 'designation',
      key: 'designation',
      align: 'center',
    },
  ];
  return (
    <ApiSuspense meta={metaProfile}>
      <Row>
        <Col span={24}>
          <Wrapper>
            <Row>
              <CenterText span={24}>
                <Title level={5}>Basic Profile</Title>
                <Divider />
              </CenterText>
              <Col span={24}>
                <Row>
                  <Col span={8} offset={8}>
                    <Row>
                      <Col span={12}>Organization</Col>
                      <Col span={12}>: {profileData.organization}</Col>
                      <DividerPadding />
                      <Col span={12}>User ID</Col>
                      <Col span={12}>: {profileData.userId}</Col>
                      <DividerPadding />
                      <Col span={12}>Email</Col>
                      <Col span={12}>: {profileData.email}</Col>
                      <DividerPadding />
                      <Col span={24}>
                        <CenterText>
                          <Title level={5}>Assigned Plant Details</Title>
                        </CenterText>
                      </Col>
                      <DividerPadding />
                      <Col span={24}>
                        <Table
                          dataSource={profileData.plants}
                          columns={COLUMNS}
                          pagination={false}
                          bordered
                          size="middle"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </ApiSuspense>
  );
}

export default Profile;
