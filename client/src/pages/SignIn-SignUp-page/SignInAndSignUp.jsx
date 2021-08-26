import React from "react";
import "./SignInAndSignUpStyle.scss";
import Login from "../../components/sign-in/Login";
import Register from "../../components/sign-up/Register";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};
export default SignInAndSignUp;
