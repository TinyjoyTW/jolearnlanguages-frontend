import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    // If the user is not logged in ❌
    return <Navigate to="/login" />;
  }
  // Check if isAdmin ONLY if user exists === !user && !user.isAdmin
  else if (!user?.isAdmin) {
    return <h1>Not Allowed</h1>;
  } else {
    return children;
  }
}

export default IsAdmin;
