import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { registerUser } from "../../api";
import { useAuth } from "../../context/auth";

export function SignUp() {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const onSignIn = async () => {
    if (password !== repassword) {
      return;
    }

    const response = await registerUser(login, email, password);

    if (response) {
      setLogin("");
      setPassword("");
      setRePassword("");
      setEmail("");
      loginUser(response);
      navigate("/dashboard");
      return;
    }

    setError(response.error ? response.error : "Erreur inconnue");
  };

  return (
    <div className="signin">
      <h2>Bienvenue sur Groupomania !</h2>
      <p>
        Bienvenue dans le meilleur reseau social pour les entreprises.
        <br />
        Veuillez enregister votre nom d'utilisateur, votre mot de passe ainsi
        que sa confirmation.
      </p>
      <div
        style={{
          flex: 1,
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Input
          id="login"
          label="Nom d'utilisateur"
          onChange={onLoginChange}
          placeholder=""
          type="text"
          value={login}
          error={error}
        />
        <Input
          id="email"
          label="E-Mail"
          onChange={onEmailChange}
          placeholder=""
          type="text"
          value={email}
        />
        <Input
          id="password"
          label="Mot de passe"
          onChange={onPasswordChange}
          placeholder=""
          type="password"
          value={password}
        />
        <Input
          id="repassword"
          label="Confirmation mot de passe"
          onChange={onRePasswordChange}
          placeholder=""
          type="password"
          value={repassword}
        />
        <Button title="S'enregistrer" onClick={onSignIn} />

        <div className="new-user">
          <div>
            Déjà un compte ? <Link to="/">Se connecter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
