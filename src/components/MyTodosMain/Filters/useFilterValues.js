import { useState } from "react";

import useGetCurrentAdjustments from "../useGetCurrentAdjustments.js";

const useFilterValues = () => {
  const currentFilters = useGetCurrentAdjustments().filters;

  const [filterValues, setFilterValues] = useState(currentFilters);

  const updateFilters = (e) => {
    const filterName = e.target.name;

    const filterValue = e.target.value;

    //if we clicked no value for a certain filter, if that filter currently exists in our filterValues,remove it.
    if (!filterValue) {
      const newValues = { ...filterValues };

      delete newValues[filterName];

      setFilterValues(newValues);
    } else if (filterValues) {
      setFilterValues({
        ...filterValues,
        [filterName]: filterValue,
      });
    }
  };

  return [filterValues, updateFilters];
};

export default useFilterValues;
