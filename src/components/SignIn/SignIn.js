import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { loginUser as LoginUserAPI } from "../../api";
import { useAuth } from "../../context/auth";

export function SignIn() {
  // Hooks de auth et de navigation
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  // States locaux
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Ecoute les changements de valeur de l'input password et les stocke dans le state local grace à setEmail
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Ecoute les changements de valeur de l'input password et les stocke dans le state local grace à setPassword
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignIn = async () => {
    // On met le state en mode loading => Le bouton se connecter va passer en disabled
    setLoading(true);
    try {
      // On récupère les informations de l'API (token d'authentification)
      const response = await LoginUserAPI(email, password);
      // On passe l'etat de loading a false
      setLoading(false);
      // Si pas d'erreur, on navigue vers la route protégée Messages
      if (response && !response.error) {
        // On notifie le context d'authentification qu'on est bien connecté.
        loginUser(response);
        // On navigue vers la route messages
        navigate("/dashboard");
        return;
      }
      // On ne connait pas l'origine de l'erreur . Peut etre mettre des logs a l'avenir si on arrive ici.
      setError(response.error ? response.error : "Erreur inconnue");
    } catch (error) {
      console.log(error);
      // Meme en cas d'erreur on doit passer l'etat de loading a false, car sinon on ne peut plus recliquer sur le bouton "se connecter"
      setLoading(false);
    }
  };

  return (
    <div className="signin">
      <h2>Bienvenue sur Groupomania !</h2>
      <p>
        Bienvenue dans le meilleur reseau social pour les entreprises.
        <br />
        Veuillez renseigner votre e-mail et votre mot de passe.
      </p>
      <div className="container">
        <Input
          id="login"
          label="E-Mail"
          onChange={onEmailChange}
          placeholder=""
          type="email"
          value={email}
          error={error}
        />
        <Input
          id="password"
          label="Mot de passe"
          onChange={onPasswordChange}
          placeholder=""
          type="password"
          value={password}
          error={error}
        />
        <Button title="Se connecter" disabled={loading} onClick={onSignIn} />

        <div className="new-user">
          <div>
            Nouvel utilisateur ? <Link to="/signup">S'enregistrer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
