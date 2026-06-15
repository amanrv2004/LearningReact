import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slicer2';

const stored = configureStore({
    reducer:{
        slice2:cartReducer,
    }
})  

export default stored;