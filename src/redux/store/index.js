import { combineReducers } from "redux";
import productReducer from "./products";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;

