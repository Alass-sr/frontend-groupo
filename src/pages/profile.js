import React from "react";
import { getCurrentUser, updateCurrentUser } from "../api";

export function Profile() {
  const [user, setUser] = React.useState();

  const fetchUser = async () => {
    const user = await getCurrentUser(localStorage.getItem("userId"));
    setUser(user);
  };

  const updateUser = async (isAdmin) => {
    await updateCurrentUser(
      localStorage.getItem("userId"),
      isAdmin,
      user.pseudo
    );
  };

  const onChangeAdmin = async (e) => {
    await updateUser(e.target.checked);
    fetchUser();
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="profile-page">
      <div className="log-container">
        {user && (
          <div>
            <h1>Profil</h1>

            <h3 style={{ marginTop: 20 }}>Nom d'utilisateur : {user.pseudo}</h3>
            <h3>Email : {user.email}</h3>
            <h3>
              Administrateur{" "}
              <input
                onChange={onChangeAdmin}
                style={{ transform: "scale(1.5)", marginLeft: 10 }}
                type={"checkbox"}
                checked={user.isAdmin}
              />
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
