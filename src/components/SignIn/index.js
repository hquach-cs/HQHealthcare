import React from "react";

import {
  SignInContainer,
  SignInWrapper,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButtonWrapper,
  FormButton,
  Text,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <SignInWrapper>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButtonWrapper>
              <FormButton type="submit">Continue</FormButton>
            </FormButtonWrapper>
            <Text>Forgot Email</Text>
            <Text>Forgot Password</Text>
          </Form>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
};

export default SignIn;
