import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";




function PasswordGenerator(){
    
    const [Password , setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [numberChanged ,setnumberChanges]  = useState(false);
    const [charChanged ,setcharChanges]  = useState(false);
    
    //useCallback 
    const generatePassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str += "0123456789";
        }
        if(charChanged){
           str += "@#$%^&*()!<>{}[]?~+-=-";
        }
        let pass = "";
        for(let i =0; i < length ;i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    },[length,charChanged,numberChanged]);
    

    //useEffect 
    useEffect(()=>{
        generatePassword();
    },[generatePassword])   // or [length,numberChanged,charChanged]



    return (
        <>
          <h1>{Password}</h1>
          <div className="second">
            <input type="range" min={5} max={20} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is : {length}</label>
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanges(!numberChanged)}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanges(!charChanged)}></input>
            <label>Character</label>
          </div>
        </>
    )
}







ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>)


