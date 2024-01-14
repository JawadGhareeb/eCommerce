import { configureStore } from "@reduxjs/toolkit";
import cart from "./postSlice";
import auth from "./authSlice";
const store = configureStore({
    reducer: { cart, auth },
});

export default store;
