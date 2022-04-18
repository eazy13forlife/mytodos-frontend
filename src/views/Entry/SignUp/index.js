import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../../history.js";
import validateFields from "./validation.js";
import Input from "../../../components/EntryFormFields/Input/Input.js";
import { createUser } from "../../../actions";
import "../index.scss";

//signUpErrors object.Global source of truth when it comes to errors in sign up page. Everytime this page loads, it will always be equal to a blank object. We edit it globally and then we set formErrors state to this object, but use spread operator so we are returning a new formErrors object in memory, so our component can rerender.
let signUpErrors = {};

const SignUp = () => {
  console.log("i just rerendered");
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [clickSignUp, setClickSignUp] = useState(false);

  //if clickSignUp is true and no formErrors(from backend and frontend), let's go to inbox page. Otherwise, setClickSignUp needs to be false,and we try again.
  useEffect(() => {
    if (clickSignUp) {
      if (userInfo) {
        history.push("/inbox");
      } else {
        setClickSignUp(false);
      }
    }
  }, [clickSignUp]);

  //whenever signUpErrorsBackend changes,change global signUpErrors to equal these new errors (since it is our main truth of current errors) and then we update our formErrors state to equal this global signUpErrors
  useEffect(() => {
    if (signUpErrorsBackend) {
      signUpErrors = { ...signUpErrorsBackend };
      setFormErrors(signUpErrors);
    }
  }, [signUpErrorsBackend]);

  const onInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) => {
      validateFields(formData[field], field, signUpErrors);
    });

    //in order to get our component to rerender, formErrors has to equal something new, so since global signUpErrors has changed, we want formErrors to equal a new signUpErrors object, not just the same one in memory, otherwise our app won't rerender
    setFormErrors({ ...signUpErrors });

    // We can't automatically check formErrors to see if empty because setState does not always immediately update the component, so refer instead to global signUpErrors state to see if we do or don't have errors.
    if (!Object.keys(signUpErrors).length) {
      await dispatch(createUser(formData));
      setClickSignUp(true);
    }
  };

  return (
    <div className="Entry">
      <div className="Entry__container container">
        <form
          method="post"
          action="urlofthepageontheserverthatthisformwillgoto"
          className="EntryForm"
          onSubmit={onSubmit}
        >
          <h1 className="EntryForm__title">Sign Up</h1>

          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            errors={formErrors}
            onChange={(e) => {
              onInputChange(e, "name");
            }}
            onBlur={() => {
              validateFields(formData.name, "name", signUpErrors);
              setFormErrors({ ...signUpErrors });
            }}
          />

          <Input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            errors={formErrors}
            onChange={(e) => {
              onInputChange(e, "email");
            }}
            onBlur={() => {
              validateFields(formData.email, "email", signUpErrors);
              setFormErrors({ ...signUpErrors });
            }}
          />

          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            errors={formErrors}
            onChange={(e) => {
              onInputChange(e, "password");
            }}
            onBlur={() => {
              validateFields(formData.password, "password", signUpErrors);
              setFormErrors({ ...signUpErrors });
            }}
          />

          <div className="EntryForm__group">
            <button
              type="submit"
              className="EntryForm__button primary-button primary-button--dark"
            >
              Sign Up
            </button>
          </div>

          <div className="EntryForm__info">
            <p>
              Already signed up?{" "}
              <Link to="/login" className="EntryForm__link">
                Go to login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
