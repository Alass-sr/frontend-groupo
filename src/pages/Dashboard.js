import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "../components";
import { useAuth } from "../context/auth";

const ItemNav = ({ name, active, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigate = () => {
    navigate(path);
  };

  return (
    <div
      className={`item-nav ${location.pathname === path ? "active" : ""}`}
      onClick={onNavigate}
    >
      <div className="icon"></div>
      <div className="text">{name}</div>
    </div>
  );
};

const Dashboard = () => {
  const { logoutUser } = useAuth();

  return (
    <div className="dashboard">
      <div className="navigation">
        <div className="logo">
          <img src={require("../assets/logo_cropped.png")} alt="groupomania" />
        </div>
        <div className="content-nav">
          <ItemNav path="/dashboard" name="Messages" />
          <ItemNav path="/dashboard/profile" name="Profile" />
        </div>
        <div className="logout">
          <Button title="Se déconnecter" onClick={logoutUser} />
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
