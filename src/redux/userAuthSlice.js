import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
}

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        userAuth: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated ;
        }
    }
})

export const {userAuth} = userAuthSlice.actions;
export default userAuthSlice.reducer;