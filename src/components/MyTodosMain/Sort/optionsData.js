const sortByOptions = [
  "",
  "dueDate",
  "createdAt",
  "priority",
  "title",
  "updatedAt",
];

const orderOptions = ["increasing", "decreasing"];

const getDisplayName = (value) => {
  switch (value) {
    case "":
      return "default";
    case "dueDate":
      return "due date";
    case "createdAt":
      return "created at";
    case "priority":
      return "priority";
    case "title":
      return "name";
    case "increasing":
      return "increasing";
    case "decreasing":
      return "decreasing";
    case "updatedAt":
      return "updated at";
    default:
      return "";
  }
};

export { sortByOptions, orderOptions, getDisplayName };
