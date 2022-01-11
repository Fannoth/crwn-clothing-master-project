import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";
import {
  SignUpContainer,
  SignUpTitle,
  ButtonsBarContainer,
} from "./SignUp.styled";

export const SingUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = newUser;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setNewUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setNewUser({
      ...newUser,
      [event.target.name]: value,
    });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="display name"
          requierd
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          requierd
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          requierd
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm Password"
          requierd
        ></FormInput>
        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignUpContainer>
  );
};
