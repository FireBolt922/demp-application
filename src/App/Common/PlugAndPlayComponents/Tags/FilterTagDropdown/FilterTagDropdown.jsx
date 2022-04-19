import { Filter } from 'tabler-icons-react';
import { Menu, Dropdown, Checkbox } from 'antd';
import FilterBySelectedTag from 'App/Common/PlugAndPlayComponents/Tags/FilterBySelectedTag/FilterBySelectedTag';
import MakingSingleListFromNestedList from 'App/Common/Functionalities/MakingSingleListFromNestedList/MakingSingleListFromNestedList';
import React from 'react';

function FilterTagDropdown({
  tagList,
  meterList,
  auxiliaryList,
  selectedFilterTag,
  setMeterListDataSource,
  setAuxiliaryListDataSource,
  selectedTagList,
}) {
  function filterByTags(tagValue) {
    if (selectedTagList.some((item) => item.id === tagValue.id)) {
      const selectedTag = selectedTagList.filter((item) => {
        return item.id !== tagValue.id;
      });

      setMeterListDataSource(
        FilterBySelectedTag(
          selectedTag,
          selectedTag.length > 0
            ? MakingSingleListFromNestedList(meterList)
            : meterList,
        ),
      );
      if (auxiliaryList) {
        setAuxiliaryListDataSource(
          FilterBySelectedTag(selectedTag, auxiliaryList),
        );
      }
      selectedFilterTag(selectedTag);
    } else {
      selectedTagList.push(tagValue);
      setMeterListDataSource(
        FilterBySelectedTag(
          selectedTagList,
          MakingSingleListFromNestedList(meterList),
        ),
      );
      if (auxiliaryList) {
        setAuxiliaryListDataSource(
          FilterBySelectedTag(selectedTagList, auxiliaryList),
        );
      }
      selectedFilterTag(selectedTagList);
    }
  }

  const filterMenu = (
    <Menu>
      {tagList.map((item) => {
        return (
          <Menu.Item key={item.id}>
            <Checkbox
              key={item.id}
              onChange={() => filterByTags(item)}
              checked={selectedTagList.some((value) => value.id === item.id)}
            >
              {item.name}
            </Checkbox>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={filterMenu}>
      <Filter size={24} color="#00abfb" />
    </Dropdown>
  );
}

export default FilterTagDropdown;
