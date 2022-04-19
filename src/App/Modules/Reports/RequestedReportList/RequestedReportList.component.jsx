import React from 'react';
import { Button, Table, Col, Row, Tooltip, Typography, Divider } from 'antd';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { RedoOutlined } from '@ant-design/icons';
import ToolTip from 'App/Common/UIComponents/ToolTip/ToolTip';
import { INFORMATION } from 'App/Common/UIComponents/ToolTipInformation/ToolTipInformation';
import { dummyRequestedReportData } from './RequestedReportList.utilities';
import {
  Wrapper,
  CustomTag,
  RefreshButtonCol,
} from './RequestedReportList.styled';

function RequestedReportList() {
  const { Title } = Typography;

  function disableDownloadButtonCondition(link, reportDetails) {
    const { reportStatus } = reportDetails;
    // In this function we check the condition and decide wether the button should be disabled or not. If link is null or State is other than uploaded then it returns true
    return link === null || reportStatus.state !== 'Uploaded';
  }

  function disableFunctionality(link, state) {
    // This function will be used for displaying the download button for the report.
    return (
      <a href={link} target="_parent" rel="noopener">
        <Button
          type="primary"
          disabled={disableDownloadButtonCondition(link, state)}
        >
          Download Report
        </Button>
      </a>
    );
  }
  function checkReportStatus(color, row) {
    const { reportStatus } = row;
    return <CustomTag color={color}>{reportStatus.state}</CustomTag>;
  }
  const columns = [
    {
      title: 'Requested At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Valid Till',
      dataIndex: 'validUntil',
      key: 'validUntil',
    },

    {
      title: 'Report Status',
      dataIndex: ['reportStatus', 'color'],
      key: 'reportStatus',
      render: (color, row) => checkReportStatus(color, row),
    },
    {
      title: 'Shift Name',
      dataIndex: 'shiftName',
      key: 'shiftName',
    },
    {
      title: 'Request Type',
      dataIndex: 'requestType',
      key: 'requestType',
    },
    {
      title: 'Download Link',
      dataIndex: 'downloadLink',
      key: 'downloadLink',
      state: 'state',
      render: (link, state) => disableFunctionality(link, state),
    },
  ];
  return (
    <ApiSuspense>
      <Wrapper>
        <Row>
          <Col span={12}>
            <Title level={5}>
              Download Requested Reports
              <ToolTip titleOfToolTip={INFORMATION.DOWNLOAD_REPORT_PAGE} />
            </Title>
          </Col>
          <RefreshButtonCol span={12}>
            <Tooltip title="Refresh">
              <Button
                icon={<RedoOutlined />}
                type="primary"
                shape="circle"
                onClick={() => window.location.reload()}
              />
            </Tooltip>
          </RefreshButtonCol>
        </Row>
        <Divider />
        {dummyRequestedReportData.results ? (
          <Table
            dataSource={dummyRequestedReportData.results}
            columns={columns}
            pagination={{ position: ['bottomCenter'] }}
          />
        ) : null}
      </Wrapper>
    </ApiSuspense>
  );
}

export default RequestedReportList;
