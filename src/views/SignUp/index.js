import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUser } from "../../actions/user.js";
import "./index.scss";

createUser("kksk", "ppfp@yahoo.com", "lemonadfe")();
const SignUp = () => {
  return (
    <div className="Signup">
      <h1>Sign Up</h1>;
    </div>
  );
};

export default SignUp;
