const renderPriorityValue = (num) => {
  switch (num) {
    case "1":
      return "low";
    case "2":
      return "medium";
    case "3":
      return "high";
    default:
      return undefined;
  }
};

export default renderPriorityValue;
