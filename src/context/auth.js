import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const navigate = useNavigate();

  // Call this function when you want to authenticate the user
  const loginUser = async (data) => {
    setUser(data);
    localStorage.setItem("token", data);
    navigate("/dashboard");
  };

  // Call this function to sign out logged in user
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
