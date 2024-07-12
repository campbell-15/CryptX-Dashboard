import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="center-auth">
      <SignIn path="/login" routing="path" mode=" modal" signUpUrl="/signup" />
    </div>
  );
};

export default Login;
