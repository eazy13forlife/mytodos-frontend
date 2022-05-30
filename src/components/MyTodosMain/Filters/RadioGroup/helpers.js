//takes in name and value of our radio group and decides if it should be marked checked already based on what the current filters selected are
const renderDefaultChecked = (name, value, filters) => {
  const filterProperties = Object.keys(filters);

  //if we have filtered by something, then one of our radioGroups should have the same name and value we filtered by. When we find it, this is the one we mark as checked.Otherwise, we won't mark this radio group as checked,(so we return an empty string or nothing), unless if the radio group has a value of "" meaning that no filters were found, so this is the one we check.
  for (let i = 0; i < filterProperties.length; i++) {
    const filterProperty = filterProperties[i];
    if (filterProperty === name && filters[filterProperty] === value) {
      return "checked";
    }
  }

  //if nothing is filtered, then only radiogroup that should be marcked check is the one with name "none" or value=""
  if (!value) {
    return "checked";
  }

  return undefined;
};

export { renderDefaultChecked };
