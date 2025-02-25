 import {createSlice } from '@reduxjs/toolkit';

 const initialState = {
   userId:null,
   userName:null,
 
};
 export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state,action) => {
        state.userId = action.payload.id;
        state.userName = action.payload.name;    
      },
      logout: (state) => {
        state.userId = null;
        state.userName = null;    
      },
    },
});
export const { login,logout } = userSlice.actions;
export default userSlice.reducer;