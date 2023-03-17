import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";
import productReducer from "./store/products";

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

const reducer = combineReducers(
  Object.assign(
    {},
    { products: productReducer },
    {
      routing: routerReducer,
    }
  )
);

export default function configStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}
