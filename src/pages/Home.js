import React from "react";
import { SignIn } from "../components";

export default function Home() {
  return (
    <div className="main">
      {/* Left side with illustration*/}
      <div className="left-content">
        <img
          src={require("../assets/icon-left-font-monochrome-black.png")}
          alt="groupomania"
        />
      </div>

      {/* Right side with sign-in/sign-up content*/}
      <div className="right-content">
        <SignIn />
      </div>
    </div>
  );
}
