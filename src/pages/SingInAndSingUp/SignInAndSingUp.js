import React from "react";
import { SignIn } from "../../components/SignIn/SignIn";
import { SingUp } from "../../components/SingUp/SignUp";
import {
  Wrapper,
  SignInAndSignUpContainer,
  TextAlert,
} from "./SignInAndSingUp.styled";

export const SignInAndSingUp = () => {
  return (
    <Wrapper>
      <SignInAndSignUpContainer>
        <SignIn />
        <SingUp />
      </SignInAndSignUpContainer>
      <TextAlert>
        Please use your gmail account for sign in or use following data for test
        login:
        <br />
        email: <strong>test123@gmail.com</strong>
        <br />
        password: <strong>test123</strong>
      </TextAlert>
    </Wrapper>
  );
};
