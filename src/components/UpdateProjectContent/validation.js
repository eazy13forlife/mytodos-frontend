const validateProjectData = (data, field, errors) => {
  if (field === "title") {
    if (!data[field]) {
      errors[field] = "Required";
    } else if (data[field].length > 120) {
      errors[field] = "Title must not be greater than 120 characters";
    } else {
      delete errors.title;
    }
  }
};

export default validateProjectData;
