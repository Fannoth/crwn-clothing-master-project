import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { FormInput } from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './SignIn.styled';

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: "", password: "" });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          label="email"
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          label="password"
          onChange={handleChange}
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};
