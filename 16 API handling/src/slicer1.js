

import { createAsyncThunk } from "@reduxjs/toolkit";

const FetchData = createAsyncThunk(
    //Action : type , payload
   
    'Coin/fetch',
    
    async (args , thunkAPI)=>{
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);

            const data = await response.json();
            return data;   // payload = data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }


)