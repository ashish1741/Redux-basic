import {  createSlice } from "@reduxjs/toolkit";


const userSlice =  createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            // console.log(action.payload);
            

        },
        removerUser(state,action){
            state.splice(action.payload,1)
        },
        clearAllUsers(state,action){
            return state = [];
        },
    },

});
// console.log(userSlice);
// console.log(userSlice);
// console.log(userSlice.actions);

export default userSlice.reducer;
export const {addUser,removerUser,clearAllUsers} = userSlice.actions;