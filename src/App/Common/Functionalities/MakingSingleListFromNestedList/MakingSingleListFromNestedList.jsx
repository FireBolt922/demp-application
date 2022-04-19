function MakingSingleListFromNestedList(meterList) {
  const tempMeterList = [];
  meterList.map((item) => {
    // This will create a temporary variable which holds all the keys of item except children
    const { children, ...tempItem } = item;
    tempMeterList.push(tempItem);
    item.children.map((childItems) => {
      tempMeterList.push(childItems);
      return true;
    });
    return true;
  });

  return tempMeterList;
}

export default MakingSingleListFromNestedList;
