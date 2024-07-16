import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="center-auth bg-purple-600">
      <SignIn path="/login" routing="path" mode=" modal" signUpUrl="/" />
    </div>
  );
};

export default Login;
