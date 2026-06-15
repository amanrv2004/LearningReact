import {createSlice} from "@reduxjs/toolkit";

const reactSlicer =  createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count++},
        Decrement:(state)=>{state.count--},
        Reset:(state)=>{state.count = 0},
        CustomIncreaser:(state,action)=>{state.count+= action.payload},
    }
});

export const {Increment,Decrement,Reset,CustomIncreaser} = reactSlicer.actions;

export default reactSlicer.reducer;