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
        authenication: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})

export const {authenication} = userAuthSlice.actions;
export default userAuthSlice.reducer;