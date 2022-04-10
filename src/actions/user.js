import axios from "axios";

const createUser = (name, email, password) => {
  return async (dispatch, getState) => {
    try {
      const userData = {
        name,
        email,
        password,
      };

      const createdUser = await axios.post(
        "http://localhost:3000/users/create",
        userData
      );

      console.log(createdUser);
    } catch (e) {
      console.log(e.response);
    }
  };
};

export { createUser };
