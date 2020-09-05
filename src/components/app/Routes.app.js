// ROUTES
import LoginPage from "../loginPage/LoginPage";
import SigninPage from "../signinPage/SigninPage";
import DashboardPage from "../dashboardPage/DashboardPage";
import NotFoundPage from "../notFoundPage/NotFoundPage";

export const publicPaths = [
  {
    name: "Login",
    path: "/log-in",
    component: LoginPage,
    restricted: true,
  },
  {
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
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
];
