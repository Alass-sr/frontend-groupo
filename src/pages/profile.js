import React from "react";
import Profile from "../components/Profile";

function profile() {
  return (
    <div className="profile-page">
      <div className="log-container">
        <Profile login={false} signup={true} />
      </div>
    </div>
  );
}

export default profile;
