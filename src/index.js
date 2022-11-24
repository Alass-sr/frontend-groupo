import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import "./styles/index.scss";
import "./css/app.css";
// importation du router
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
