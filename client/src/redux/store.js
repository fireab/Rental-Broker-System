import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "./features/user.slice";
// import authReducer from './reducers/authReducer';
import authSlice from "./features/user.slice";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        userState: userReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware,])
});

export default store;
