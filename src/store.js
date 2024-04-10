import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";


const reducer = {
    auth: authReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;