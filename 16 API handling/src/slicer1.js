import { createAsyncThunk } from "@reduxjs/toolkit";



// {type:'coin/fetch/pending', payload: undefined}
// {type:'coin/fetch/fullfiled', payload: data}
// {type:'coin/fetch/rejected', payload: undefined}




const FetchData = createAsyncThunk(
    //Action : {type , payload}
   
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