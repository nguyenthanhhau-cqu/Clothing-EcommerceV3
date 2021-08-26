import React, { useState } from "react";
import "./Register.scss";
import { auth, createUserProfile } from "../../firebase/firebaseUtils.js";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const Register = () => {
  const [regForm, setRegForm] = useState({
    displayName: "",
    password: "",
    email: "",
    passwordConfirm: "",
  });
  const { password, email, passwordConfirm, displayName } = regForm;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, passwordConfirm } = regForm;

    if (password !== passwordConfirm) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });

      setRegForm({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegForm({
      ...regForm,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          minLength="6"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          minLength="6"
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
          label="Confirm password"
          minLength="6"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
export default Register;
