import React, { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    const data = { pseudo, email, password };

    await axios
      .post(`${process.env.REACT_APP_API_URL}api/user/signup`, data)
      .then((res) => {
        if (res.data.errors) {
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    {}
    <form action="" onSubmit={handleRegister} id="sign-up-form">
      <label htlmFor="pseudo">Pseudo</label>
      <br />
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <div className="pseudo error"></div>
      <br />
      <label htlmFor="email">email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htlmFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Valider inscription" />
    </form>
    </>
  );
}
