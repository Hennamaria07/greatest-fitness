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
            state.user = action.payload;
            state.token = action.payload;
            state.isAuthenticated = action.payload.isAuthenticated ;
        }
    }
})

export const {userAuth} = userAuthSlice.actions;
export default userAuthSlice.reducer;