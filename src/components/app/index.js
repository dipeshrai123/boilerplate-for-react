import React from "react";
import { Auth, withNavigation } from "react-auth-navigation";
import { publicPaths, privatePaths } from "./Routes.app";
import { userRoles } from "./UserRoles.app";

// commons
import { Header } from "../common";

// Auth child
const AuthChild = React.memo(() => {
  return (
    <>
      <Header />
      <Auth.Screens />
    </>
  );
});

// Root component
const App = () => {
  return (
    <Auth.Provider config={{ isLoggedIn: true, userRole: "admin" }}>
      <AuthChild />
    </Auth.Provider>
  );
};

// withNavigation
export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
});
