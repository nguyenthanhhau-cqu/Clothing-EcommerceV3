import React from "react";
import "./CustomButtonStyle.scss";

const CustomButton = (
  { children, isGoogle, inverted, ...otherProps } //children props is what we pass btw component <abc>This is children</abc>
) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogle ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
