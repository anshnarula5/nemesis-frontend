import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";

const adminInfoFromLocalStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  adminLogin: {
    adminInfo: adminInfoFromLocalStorage,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
