import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";


export default function CoinCreate(){
     
   const dispatch =  useDispatch();
    const {data,loading ,error}=useSelector((state)=>state.slice1);

    useEffect(()=>{
        dispatch(FetchData(20));
    });

    // Display of 20 User


}