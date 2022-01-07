import React from "react";
import { SignIn } from "../../components/SignIn/SignIn";
import { SingUp } from "../../components/SingUp/SignUp";
import "./SignInAndSingUp.scss";

export const SignInAndSingUp = () => {
  return (
    <div className="wrapper">
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SingUp />
      </div>
      <span className="test-alert">
        Please use following data for test login:
        <br />
        email: <strong>test123@gmail.com</strong>
        <br />
        password: <strong>test123</strong>
      </span>
    </div>
  );
};
