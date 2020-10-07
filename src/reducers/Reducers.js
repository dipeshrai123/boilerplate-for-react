import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
