import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "../Fields.scss";

const Input = ({ type, name, id, value, onChange, onBlur, errors }) => {
  return (
    <div className="EntryForm__group">
      <label className="EntryForm__input-label" htmlFor={id}>
        {id}
      </label>

      <div className="EntryForm__input-container">
        <input
          type={type}
          name={name}
          className={`EntryForm__input ${
            errors[name] && "EntryForm__input--error"
          }`}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <AiOutlineExclamationCircle
          className={`EntryForm__input-icon ${
            errors[name] && "EntryForm__input-icon--error"
          }`}
        />
      </div>

      {errors[name] && <span className="color-error">{errors[name]}</span>}
    </div>
  );
};

export default Input;
