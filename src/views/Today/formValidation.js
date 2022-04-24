import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup.string().required("Required").email("Invalid email"),
  firstName: yup
    .string()
    .required()
    .max(15, "Must be no more than 15 characters"),
  lastName: yup
    .string()
    .required("Required")
    .max(20, "Must be no more than 20 characters"),
});

export default userSchema;
