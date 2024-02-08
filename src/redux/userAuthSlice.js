import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
}
const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        authentication: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})

export const {authentication} = userAuthSlice.actions;
export default userAuthSlice.reducer;