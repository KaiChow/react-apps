import { combineReducers } from "redux";
import rightsReducer from "./rights";

const rootReducer = combineReducers({
  rightsReducer,
});

export default rootReducer;

export * as rightsActions from "../actions/index";
