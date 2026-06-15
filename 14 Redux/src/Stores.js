import { configureStore } from "@reduxjs/toolkit"
import slice1Reduce from './slicer1'
const stores = configureStore({
    reducer:{
        slice1:slice1Reduce
    }
})  