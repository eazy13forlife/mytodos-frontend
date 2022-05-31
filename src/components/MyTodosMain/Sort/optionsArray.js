const sortByOptions = [
  { value: "", displayName: "default" },
  {
    value: "dueDate",
    displayName: "Due Date",
  },
  {
    value: "createdAt",
    displayName: "Created At",
  },
  {
    value: "priority",
    displayName: "Priority",
  },
  { value: "title", displayName: "Name" },
  { value: "updatedAt", displayName: "Updated At" },
];

const orderOptions = [
  { value: "increasing", displayName: "Increasing" },
  { value: "decreasing", displayName: "decreasing" },
];

const sortByOptions2 = ["", "dueDate", "createdAt", "priority", "title"];
const orderOptions2 = ["increasing", "decreasing"];

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
      return "title";
    case "increasing":
      return "increasing";
    case "decreasing":
      return "decreasing";
    default:
      return "";
  }
};
export { sortByOptions2, orderOptions2, getDisplayName };
