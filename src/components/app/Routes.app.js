// ROUTES
import LoginPage from "../loginPage/LoginPage";
import SigninPage from "../signinPage/SigninPage";
import DashboardPage from "../dashboardPage/DashboardPage";
import NotFoundPage from "../notFoundPage/NotFoundPage";

export const publicPaths = [
  {
    key: "Login",
    name: "Login",
    path: "/log-in",
    component: LoginPage,
    restricted: true,
  },
  {
    key: "Signin",
    name: "Signin",
    path: "/sign-in",
    component: SigninPage,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];

export const privatePaths = [
  {
    key: "Dashboard",
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
];
