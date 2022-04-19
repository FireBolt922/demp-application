function FilterBySelectedTag(selectedTagList, meterList) {
  const tempDataSource = [];

  meterList.forEach((item) => {
    if (
      selectedTagList.every((value) => item.assignedTagsID.includes(value.id))
    ) {
      if (tempDataSource.includes(item) === false) {
        tempDataSource.push(item);
      }
    }
  });

  return tempDataSource;
}

export default FilterBySelectedTag;
