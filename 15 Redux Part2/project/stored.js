import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slice2';

const stores = configureStore({
    reducer:{
        slice2:cartReducer,
    }
})  

export default stores;