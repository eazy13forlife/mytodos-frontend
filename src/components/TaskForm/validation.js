import * as yup from "yup";
import moment from "moment";
import validator from "validator";

const dueDateValidator = function (date) {
  if (!date) {
    return true;
  }

  if (
    !validator.isDate(date, {
      format: "MM-DD-YYYY",
      delimiters: ["/", "-"],
    })
  ) {
    return false;
  }

  const todaysDateParsed = moment().startOf("day").valueOf();

  const specifiedDateParsed = moment(date, "MM-DD-YYYY").valueOf();

  if (moment(specifiedDateParsed).isBefore(todaysDateParsed)) {
    return this.createError({ message: "Date cannot be before today" });
  }

  return true;
};

const taskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Required")
    .length(500, "Title must be less than 500 characters"),
  description: yup.string(),
  priority: yup.string(),
  project: yup.string(),
  dueDate: yup.string().test("validDate", "Invalid Date", dueDateValidator),
  completed: yup.boolean(),
});

export default taskSchema;
