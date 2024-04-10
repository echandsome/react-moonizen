import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem("token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken : (state, action) => {
            localStorage.setItem("token", action.payload);
            state.token = localStorage.getItem('token');
        }
    },    
});

export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;
