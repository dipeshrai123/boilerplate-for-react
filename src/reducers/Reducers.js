import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { usersReducer } from "./Users.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
});

export default rootReducer;
