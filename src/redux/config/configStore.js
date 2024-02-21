import letters from "redux/modules/letters";
import member from "redux/modules/member";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  letters,
  member,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
