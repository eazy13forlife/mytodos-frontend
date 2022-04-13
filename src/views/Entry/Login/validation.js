const validate = (value, field, errors) => {
  if (!value) {
    errors[field] = "Required";
  } else {
    delete errors[field];
  }
};

export default validate;
