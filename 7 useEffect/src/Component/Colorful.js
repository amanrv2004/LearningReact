import React,{ useState, useEffect} from "react";
function Colorful(){
    // state variable
    const [color , setColor] = useState("black");
    
    //useEffect(callBack Function , dependency)
    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])    // jab color change hoga tab useEffect code chalega  aur ye code mai last mai chalta hai.
    // if you didn't give dependency then it will run multiple times

    return(
        <>
           <h1>Background Color Changer</h1>
           <div className="but">
              <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
              <button style={{backgroundColor:"blue"}}  onClick={()=>setColor("blue")}>Blue</button>
              <button style={{backgroundColor:"orange"}}  onClick={()=>setColor("orange")}>Orange</button>
              <button style={{backgroundColor:"green"}}  onClick={()=>setColor("green")}>Green</button>
              <button style={{backgroundColor:"pink"}}  onClick={()=>setColor("pink")}>Pink</button>
           </div>
        </>
    )
}

export default React.memo(Colorful);