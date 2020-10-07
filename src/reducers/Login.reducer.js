import { USER_LOGIN } from "../actions/Actions";

const initalState = {
  loginLoader: false,
};

export function loginReducer(state = initalState, action) {
  const { type } = action;

  switch (type) {
    case USER_LOGIN.LOADING:
      return { ...state, loginLoader: true };
    case USER_LOGIN.SUCCESS:
      return { ...state, loginLoader: false };
    case USER_LOGIN.ERROR:
      return { ...state, loginLoader: false };

    default:
      return state;
  }
}
