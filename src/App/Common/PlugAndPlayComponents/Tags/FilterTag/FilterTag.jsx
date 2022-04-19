import React from 'react';
import { Row, Col, Typography } from 'antd';
import FilterBySelectedTag from 'App/Common/PlugAndPlayComponents/Tags/FilterBySelectedTag/FilterBySelectedTag';
import MakingSingleListFromNestedList from 'App/Common/Functionalities/MakingSingleListFromNestedList/MakingSingleListFromNestedList';
import { CustomTag } from './FilterTag.styled';

const { Title } = Typography;

function FilterTag({
  meterList,
  auxiliaryList,
  selectedTagList,
  selectedFilterTag,
  setMeterListDataSource,
  setAuxiliaryListDataSource,
}) {
  function removeTag(tagValue) {
    const index = selectedTagList.indexOf(tagValue);

    /** .splice function removes the elemnt of an array at a specified index.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice  */
    selectedTagList.splice(index, 1);

    setMeterListDataSource(
      FilterBySelectedTag(
        selectedTagList,
        selectedTagList.length > 0
          ? MakingSingleListFromNestedList(meterList)
          : meterList,
      ),
    );
    if (auxiliaryList) {
      setAuxiliaryListDataSource(
        FilterBySelectedTag(selectedTagList, auxiliaryList),
      );
    }
    selectedFilterTag(selectedTagList);
  }

  return (
    <>
      <Row>
        <Col>
          <Title level={5}>Filters:</Title>
        </Col>
        <Col>
          {selectedTagList
            ? selectedTagList.map((item) => (
                <>
                  <CustomTag
                    closable
                    onClose={() => removeTag(item)}
                    color="orange"
                    key={item.id}
                  >
                    {item.name}
                  </CustomTag>
                </>
              ))
            : null}
        </Col>
      </Row>
    </>
  );
}

export default FilterTag;
