import React from "react";

import useAdjustmentFunction from "../useAdjustmentFunction.js";

const useOnSubmit = (filterValues, closeFilters) => {
  const adjustmentFunction = useAdjustmentFunction();

  const onFormSubmit = (e) => {
    e.preventDefault();

    adjustmentFunction({ filters: filterValues });

    closeFilters();
  };

  return [onFormSubmit];
};

export default useOnSubmit;
