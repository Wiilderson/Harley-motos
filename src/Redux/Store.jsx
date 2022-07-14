import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../Redux/index";

const store = configureStore({ reducer: rootReducer });
console.log("store: ", store);

export default store;
