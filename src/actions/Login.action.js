import { USER_LOGIN } from "./Actions";
import { api, APIS } from "../config/Config";

export function userLogin({ email, password }, handleLogin) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: USER_LOGIN.LOADING });

      console.log({
        email,
        password,
        handleLogin,
      });

      res = await api(`${APIS.login}`, "POST", { email, password });

      const { success, data } = res.data;

      console.log(res.data);

      if (success) {
        const {
          email: login_email,
          token: login_token,
          role: login_role,
        } = data.data;

        handleLogin({
          email: login_email,
          token: login_token,
          role: login_role,
        });

        dispatch({ type: USER_LOGIN.SUCCESS });
      } else {
        dispatch({ type: USER_LOGIN.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: USER_LOGIN.ERROR });
      return 0;
    }
  };
}
