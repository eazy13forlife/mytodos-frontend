import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { createUser } from "../../actions/user.js";
import "./index.scss";

createUser("kksk", "ppfp@yahoo.com", "lemonadfe")();

const SignUp = () => {
  return (
    <div className="Entry full-wrap">
      <section className="Entry__main">
        <div className="Entry__container container">
          <form
            method="post"
            action="urlofthepageontheserverthatthisformwillgoto"
            className="EntryForm"
          >
            <h1 className="EntryForm__title">Sign Up</h1>
            <div className="EntryForm__group">
              <label className="EntryForm__input-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="full name"
                className="EntryForm__input"
                id="name"
              />
            </div>

            <div className="EntryForm__group">
              <label className="EntryForm__input-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="EntryForm__input"
                id="email"
              />
            </div>

            <div className="EntryForm__group">
              <label className="EntryForm__input-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="EntryForm__input"
                id="password"
              />
            </div>

            <div className="EntryForm__group">
              <button className="EntryForm__button primary-button primary-button--dark">
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
      </section>
    </div>
  );
};

export default SignUp;
