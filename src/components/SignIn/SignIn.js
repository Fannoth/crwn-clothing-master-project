import React, { useState } from "react";
import "./SignIn.scss";
import { FormInput } from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";

export const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setState({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          label='email'
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          label='password'
          onChange={handleChange}
        />


        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};
