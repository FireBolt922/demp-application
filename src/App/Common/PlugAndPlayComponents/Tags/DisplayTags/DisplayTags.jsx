import React from 'react';
import * as network from 'react-hooks/network/network';
import FilterBySelectedTag from 'App/Common/PlugAndPlayComponents/Tags/FilterBySelectedTag/FilterBySelectedTag';
import {
  API_NETWORK_STATUS,
  CXO_DESIGNATIONS,
} from 'App/Constants/app.constants';
import { Modal } from 'antd';
import customLocalStorage from 'utilities/storage';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import MakingSingleListFromNestedList from 'App/Common/Functionalities/MakingSingleListFromNestedList/MakingSingleListFromNestedList';
import { assignTagService } from '../AddTags/AddTag.service';
import { CustomTag } from './DisplayTags.styled';

function DisplayTags({
  tagsData,
  plantID,
  successFunction,
  setMeterListDataSource,
  setAuxiliaryListDataSource,
  meterList,
  auxiliaryMeterList,
  selectedFilterTag,
  selectedTagList,
}) {
  const acl = customLocalStorage.getItem('acl', [], 'json');
  const designation = acl[0].designation__name.toUpperCase();
  const { call: assignTagReqCall } = network.useNetwork(assignTagService, {
    auto: false,
  });
  const deleteTag = async (item) => {
    const selectedTagsList = tagsData.assignedTags;
    const index = selectedTagsList.indexOf(item);

    /** .splice function removes the element of an array at a specified index.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice  */
    selectedTagsList.splice(index, 1);
    const tagIdList = [];

    selectedTagsList.map((tag) => {
      tagIdList.push(tag.id);
      return true;
    });

    const formData = {
      meter_id: tagsData.id,
      tags: tagIdList,
    };

    const { applicationCategory } = tagsData;

    const apiResponseAssign = await assignTagReqCall(
      plantID,
      applicationCategory,
      formData,
    );
    const [, stateAssign] = apiResponseAssign;
    if (stateAssign.state === API_NETWORK_STATUS.SUCCESS) {
      successFunction();
    }
  };

  function filterByTags(tagValue) {
    if (selectedTagList.some((item) => item.id === tagValue.id)) {
      setMeterListDataSource(
        FilterBySelectedTag(
          selectedTagList,
          MakingSingleListFromNestedList(meterList),
        ),
      );
      if (auxiliaryMeterList) {
        setAuxiliaryListDataSource(
          FilterBySelectedTag(selectedTagList, auxiliaryMeterList),
        );
      }
    } else {
      selectedTagList.push(tagValue);
      setMeterListDataSource(
        FilterBySelectedTag(
          selectedTagList,
          MakingSingleListFromNestedList(meterList),
        ),
      );
      if (auxiliaryMeterList) {
        setAuxiliaryListDataSource(
          FilterBySelectedTag(selectedTagList, auxiliaryMeterList),
        );
      }
      selectedFilterTag(selectedTagList);
    }
  }

  /**
   * This function will remove the tag once the user confirms he wants to remove the tag
   */
  const handleOk = (tagToBeRemoved) => {
    deleteTag(tagToBeRemoved);
  };
  function removeTag(event, tagToBeRemoved) {
    // prevent default will prevent the tag from being removed if user dose not confirm it
    event.preventDefault();
    Modal.confirm({
      centered: true,
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to remove this tag?',
      okText: 'Yes, Remove',
      cancelText: 'No',
      onOk: () => handleOk(tagToBeRemoved),
    });
  }
  return (
    <>
      {tagsData.assignedTags ? (
        <>
          {tagsData.assignedTags.map((item) => (
            <CustomTag
              closable={designation === CXO_DESIGNATIONS}
              onClose={(event) => removeTag(event, item)}
              color="orange"
              key={item.name}
              onClick={() => {
                filterByTags(item);
              }}
            >
              {item.name}
            </CustomTag>
          ))}
        </>
      ) : null}
    </>
  );
}
export default DisplayTags;
