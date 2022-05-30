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
  { value: "name", displayName: "Name" },
  { value: "updatedAt", displayName: "Updated At" },
];

const orderOptions = [
  { value: "increasing", displayName: "Increasing" },
  { value: "decreasing", displayName: "decreasing" },
];

export { sortByOptions, orderOptions };
