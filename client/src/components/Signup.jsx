import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="center-auth bg-purple-600">
      <SignUp path="/" routing="path" mode=" modal" signInUrl="/login" />
    </div>
  );
};

export default Signup;
