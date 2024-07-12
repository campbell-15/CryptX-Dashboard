import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="center-auth">
      <SignUp path="/signup" routing="path" mode=" modal" signInUrl="/login" />
    </div>
  );
};

export default Signup;
