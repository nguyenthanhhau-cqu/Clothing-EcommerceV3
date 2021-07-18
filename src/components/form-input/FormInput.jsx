import React from "react";

import "./FormInputStyles.scss";

const FormInput = ({ label, ...formProps }) => (
  <div className="group">
    <input className="form-input" {...formProps} />
    {label ? (
      <label className={`${formProps.value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
