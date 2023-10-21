import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userType: '',
    isLogged: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLogged = action.payload;
        },
        setUserType: (state, action) => {
            state.userType = action.payload;
        }
    }
})

export const { setLoggedIn, setUserType } = userSlice.actions;
export default userSlice.reducer;