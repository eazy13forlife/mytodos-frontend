import validator from "validator";

const validateFields = (value, field, errors) => {
  if (field === "name") {
    if (!value) {
      errors[field] = "Required";
    } else {
      delete errors[field];
    }
  }

  if (field === "email") {
    if (!value) {
      errors[field] = "Required";
    } else if (!validator.isEmail(value)) {
      errors[field] = "Invalid email";
    } else {
      delete errors[field];
    }
  }

  if (field === "password") {
    if (!value) {
      errors[field] = "Required";
    } else if (value.length < 7) {
      errors[field] = "Password must be at least 7 characters";
    } else if (value.length > 20) {
      errors[field] = "Password must be no more than 20 characters";
    } else {
      delete errors[field];
    }
  }
};

export default validateFields;
