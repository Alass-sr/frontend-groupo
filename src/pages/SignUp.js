import React from "react";
import { SignUp as SignUpComponent } from "../components/SignUp";

export default function SignUp() {
  return (
    <div className="main">
      {/* Left side with illustration*/}
      <div className="left-content">
        <img
          src={require("../assets/icon-left-font-monochrome-black.png")}
          alt="groupomania"
        />
      </div>

      {/* Right side with sign-up content*/}
      <div className="right-content">
        <SignUpComponent />
      </div>
    </div>
  );
}
