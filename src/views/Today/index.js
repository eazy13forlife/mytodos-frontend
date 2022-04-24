import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import "./index.scss";

import userSchema from "./formValidation.js";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors["firstName"] = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
//useFormik gives us formik state with all properties and methods
//formik calls useFormik
//passes that argument down to its child
//so useField returns formik.getFieldProps and formik.getFIeldMeta
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="Form__group">
      <label htmlFor={props.id}>{label}</label>
      {/*we are spreading props and field objects on our input component so the keys will be props and values of each object will be values of the prop on our input component */}
      <input className="Form__input" {...props} {...field} />
      {meta.touched && meta.error ? (
        <p className="Form__input-error">{meta.error}</p>
      ) : null}
    </div>
  );
};
//so type, name,className,id,and label are props for our TextInput component. We destructure label because when we spread {...props} on our actual input label, isnt included
//<TextInput type="" name="" placeholder="" id="" label="" />;

//This is for both a single checkbox(like true/false type deal) and checkbox group(if the names of the checkbox are the same. Checked values will be added to an array).We destructure label since input wont have label attribute on it. The rest of the props we will keep. Also we spread field object to get access to properties and methods like name, onBlur,onChange,value
const MyCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  console.log(field);
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input type="checkbox" className="Form__checkbox" {...props} {...field} />
    </>
  );
};

//With radios, as long as they have the same name, only one value will be chosen. destructure label since input wont have label attribute on it. The rest of the props we will keep. Also we spread field object to get access to properties and methods like name, onBlur,onChange,value. We put type:radio to get checked field for a radio to keep component controlled
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input type="radio" className="Form__radio" {...props} {...field} />
    </>
  );
};

//we destructure props object which will have name and label. Label won't go on our select tag so we destructrue it and we destructure object as well. But we need a name because the useField needs a name in it or an object with a name property
const MySelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  return (
    <div className="Form__group">
      <label id={props.id}>{label}</label>
      <select {...field} {...props}>
        {children}
      </select>
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="Form__group">
      <label htmlFor={props.id}>{label}</label>
      <textarea className="Form__text-area" {...field} {...props}>
        {props.placeholder}
      </textarea>
    </div>
  );
};

const Today = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <h1>Basic Info</h1>
        <TextInput
          name="firstName"
          label="First Name"
          id="firstName"
          placeholder="First Name"
        />
        <div className="Form__group">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </div>

        <div className="Form__group">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>

        <h1>Select all foods you are allergic to</h1>
        <MyCheckbox
          name="food"
          value="peanut butter"
          label="Peanut Butter"
          id="peanut_butter"
        />
        <MyCheckbox
          name="food"
          value="milk"
          label="Milk"
          id="milk"
          handleSchemaChange={(e, { value }, setFieldValue) => {
            setFieldValue("food", "pizza");
          }}
        />
        <MyCheckbox name="food" value="eggs" label="Eggs" id="eggs" />

        <h1>Select your favorite sport</h1>
        <MyRadio
          name="sport"
          value="basketball"
          id="basketball"
          label="Basketball"
        />
        <MyRadio name="sport" value="football" id="baseball" label="Baseball" />
        <MyRadio name="sport" value="baseball" id="football" label="Football" />

        <h2>Select all jobs you like</h2>
        <MySelect label="jobs" name="job" id="jobs">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </MySelect>

        <h2>Please write about yourself</h2>
        <MyTextArea
          name="description"
          placeholder="Please write about yourself"
          id="description"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Today;
