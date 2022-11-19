import React, { useState } from "react";

import SignInForm from "./Login";
import SignUpForm from "./SignUp";

export default function Profile(props) {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.login);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul className="log">
          <li onClick={handleModals} id="register"
           className={signUpModal ? "active-btn" : null}>
            S'inscrire
          </li>
          <li onClick={handleModals} id="login"
           className={signInModal ? "active-btn" : null}>
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
}
