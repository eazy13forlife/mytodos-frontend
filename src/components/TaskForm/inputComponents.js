import { useField } from "formik";

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
      {meta.touched && meta.error ? (
        <span className="TaskForm__error color-error">{meta.error}</span>
      ) : null}
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
    </div>
  );
};

export { TextInput, TextArea, SelectBox };
