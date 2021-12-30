import React from "react";
import { SignIn } from "../../components/SignIn/SignIn";
import { SingUp } from "../../components/SingUp/SignUp";
import "./SignInAndSingUp.scss";

export const SignInAndSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SingUp />
    </div>
  );
};
