import { useField } from "formik";

const renderErrors = (meta, backendErrors, fieldName) => {
  //we want to always show meta errors first. meta shows for onBlur, and once we submit, we might get errors from backend we will display initially. But then because of onBlur we want to show meta errors first again

  if (meta.touched && meta.error) {
    return <span className="TaskForm__error color-error">{meta.error}</span>;
  }

  if (backendErrors[fieldName]) {
    return (
      <span className="TaskForm__error color-error">
        {backendErrors[fieldName]}
      </span>
    );
  }

  return null;
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`TaskForm__group TaskForm__group--${props.id}`}>
      <label className="TaskForm__label capitalize" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="TaskForm__input TaskForm__input-padding full-width"
        {...props}
        {...field}
      />
      {renderErrors(meta, props.backenderrors, props.name)}
    </div>
  );
};

const SelectBox = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`TaskForm__group TaskForm__group--${props.id}`}>
      <label htmlFor={props.id} className="TaskForm__label capitalize">
        {label}
      </label>
      <select
        className="TaskForm__select TaskForm__input-padding full-width"
        {...field}
        {...props}
      >
        {children}
      </select>
      {renderErrors(meta, props.backenderrors, props.name)}
    </div>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`TaskForm__group TaskForm__group--${props.id}`}>
      <label className="TaskForm__label capitalize" htmlFor={props.id}>
        {label}
      </label>
      <textarea
        className="TaskForm__text-area TaskForm__input-padding full-width"
        {...field}
        {...props}
      ></textarea>
      {renderErrors(meta, props.backenderrors, props.name)}
    </div>
  );
};

export { TextInput, TextArea, SelectBox };
