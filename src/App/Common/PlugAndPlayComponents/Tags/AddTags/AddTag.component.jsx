import React, { useState, useEffect } from 'react';
import { Form, Select, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { network } from 'react-hooks';
import {
  API_NETWORK_STATUS,
  CXO_DESIGNATIONS,
} from 'App/Constants/app.constants';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { assignTagService, createTagService } from './AddTag.service';

import {
  CustomTag,
  CustomModal,
  CustomCol,
  CustomButton,
} from './AddTags.styled';
import { TAG_DESCRIPTION } from './AddTag.constants';

function AddTag({ selectedParams, successFunction, newTagCreated, tagList }) {
  const meterId = selectedParams.id;

  const { plantID } = useParams();
  const [form] = Form.useForm();
  const [showAddTagPopup, setShowAddTagPopup] = useState(false);
  const acl = customLocalStorage.getItem('acl', [], 'json');
  const designation = acl[0].designation__name.toUpperCase();

  useEffect(() => {
    form.setFieldsValue({
      tagList: selectedParams.assignedTags
        ? selectedParams.assignedTags.map((data) => data.name)
        : [],
    });
  }, [selectedParams, form]);

  // Assign Tag API Call
  const { call: assignTagReqCall } = network.useNetwork(assignTagService, {
    auto: false,
  });

  const { call: createTagReqCall } = network.useNetwork(createTagService, {
    auto: false,
  });

  const onFinish = async (values) => {
    const selectedTagsList = [];
    setShowAddTagPopup(false);

    /** This loop is to get Ids of selected tags */
    tagList.forEach((tagListItem) => {
      if (values.tagList.includes(tagListItem.name)) {
        selectedTagsList.push(tagListItem.id);
      }
    });
    const postData = {
      meter_id: meterId,
      tags: selectedTagsList,
    };

    const { applicationCategory } = selectedParams;
    const apiResponseAssign = await assignTagReqCall(
      plantID,
      applicationCategory,
      postData,
    );
    const [, stateAssign] = apiResponseAssign;
    if (stateAssign.state === API_NETWORK_STATUS.SUCCESS) {
      form.resetFields();
      successFunction();
    }
  };

  async function createNewTag(value) {
    /**
     * This if loop checks if selected tag is already present in tag list
     */
    if (
      tagList.some((item) => {
        return item.name === value;
      }) === false
    ) {
      const postData = {
        name: value,
      };
      const apiResponseCreate = await createTagReqCall(plantID, postData);
      const [, stateCreate] = apiResponseCreate;
      if (stateCreate.state === API_NETWORK_STATUS.SUCCESS) {
        newTagCreated();
      }
    }
  }

  return (
    <>
      {designation === CXO_DESIGNATIONS ? (
        <CustomTag
          onClick={() => {
            setShowAddTagPopup(true);
          }}
        >
          Add Department
        </CustomTag>
      ) : null}

      <CustomModal
        title="Add Departments"
        visible={showAddTagPopup}
        onCancel={() => {
          setShowAddTagPopup(false);
        }}
        footer={null}
      >
        <p>{TAG_DESCRIPTION}</p>

        <Form form={form} onFinish={onFinish}>
          <Row justify="center">
            <Col span={24}>
              <Form.Item
                name="tagList"
                rules={[{ required: true, message: 'Please select Tags!' }]}
              >
                <Select
                  mode="tags"
                  placeholder="Please Select Tags"
                  optionLabelProp="label"
                  onSelect={createNewTag}
                >
                  {tagList
                    ? tagList.map((item) => (
                        <Select.Option
                          value={item.name}
                          key={item.id}
                          label={item.name}
                        >
                          {item.name}
                        </Select.Option>
                      ))
                    : null}
                </Select>
              </Form.Item>
            </Col>
            <CustomCol>
              <Form.Item>
                <CustomButton type="primary" htmlType="submit" shape="round">
                  Save
                </CustomButton>
              </Form.Item>
            </CustomCol>
          </Row>
        </Form>
      </CustomModal>
    </>
  );
}
export default AddTag;
