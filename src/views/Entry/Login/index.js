import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../../history.js";
import Input from "../../../components/EntryFormFields/Input/Input.js";
import validate from "./validation.js";
import "../index.scss";
import { loginUser } from "../../../actions";

const loginErrors = {};

const Login = () => {
  const dispatch = useDispatch();

  const loginErrorBackend = useSelector((state) => {
    return state.loginErrorBackend;
  });

  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  const attemptingLogin = useSelector((state) => {
    return state.attemptingLogin;
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [clickLogin, setClickLogin] = useState(false);

  useEffect(() => {
    //if we clicked login and we got userInfo back, it means no errors so we can go to inbox page. We don't have to  setClickLogin to false because we are mounting a new page, so if this page mounts again, it will be set to default false. We don't have to remove loginErrors because action creator takes care of that. Otherwise, we leave error so it will show on screen and we set clickLogin to false, so when we click again, it will be true and this useEffect can run
    if (clickLogin) {
      if (userInfo) {
        history.push("/inbox");
      } else {
        setClickLogin(false);
      }
    }
  }, [clickLogin]);

  const onInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) => {
      validate(formData[field], field, loginErrors);
    });

    setFormErrors({ ...loginErrors });

    if (!Object.keys(loginErrors).length) {
      await dispatch(loginUser(formData));
      setClickLogin(true);
    }
  };

  return (
    <div className="Entry full-wrap">
      <div className="Entry__container container">
        {attemptingLogin ? (
          <p className="color-primary">Logging in...</p>
        ) : null}
        <form
          method="post"
          action="urlofthepageontheserverthatthisformwillgoto"
          className="EntryForm"
          onSubmit={onSubmit}
        >
          <h1 className="EntryForm__title">Log in</h1>

          <Input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            errors={formErrors}
            onChange={(e) => {
              onInputChange(e, "email");
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
          />

          <div className="EntryForm__group">
            <button
              type="submit"
              className="EntryForm__button primary-button primary-button--dark"
            >
              Log in
            </button>
          </div>

          {loginErrorBackend && (
            <p className="color-error">{loginErrorBackend}</p>
          )}

          <div className="EntryForm__info">
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="EntryForm__link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
