import React, { useState } from "react";
import { Auth, withNavigation } from "react-uicomp";
import { publicPaths, privatePaths } from "./Routes.app";
import { userRoles } from "./UserRoles.app";
import { setCookie, getCookie, removeCookie } from "../../helpers/Helpers";

// COMMONS
import Header from "../common/header/Header.common";

// ROOT COMPONENT
const App = () => {
  const email = getCookie("email");
  const token = getCookie("token");
  const userRole = getCookie("role") ? getCookie("role") : "USER";
  const isLoggedIn = email && token && userRole ? true : false;
  const [config, setConfig] = useState({ isLoggedIn, userRole });

  return (
    <Auth.Provider
      {...{ config }}
      state={{
        handleLogin: ({ email, token, role }) => {
          setCookie("email", email);
          setCookie("token", token);
          setCookie("role", role);
          setConfig({ isLoggedIn: true, userRole: role });
        },
        handleLogout: () => {
          removeCookie("email");
          removeCookie("token");
          removeCookie("role");
          setConfig({ isLoggedIn: false, userRole: "USER" });
        },
      }}>
      <Header />
      <Auth.Screens />
    </Auth.Provider>
  );
};

// WRAP WITH withNavigation HOC
export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
});
