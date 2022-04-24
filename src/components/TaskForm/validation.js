import * as yup from "yup";

const taskSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string(),
  priority: yup.string(),
  project: yup.string(),
  dueDate: yup.string(),
  completed: yup.boolean(),
});

export default taskSchema;
