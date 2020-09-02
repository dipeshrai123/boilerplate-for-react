// USER ROLES
export const userRoles = {
  admin: {
    access: ["/", "/log-in", "/sign-in", "/dashboard", "/home"],
  },
  user: {
    access: ["/", "/log-in", "/sign-in"],
  },
};
