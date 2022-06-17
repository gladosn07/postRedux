import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import usersReducer from "../features/users/userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  posts: postReducer,
  usersReducer,
});

const persistConfig = {
  key: "pst",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
