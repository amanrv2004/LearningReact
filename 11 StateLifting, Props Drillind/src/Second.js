import Third  from "./Third"
export default function Second({count,setCount}){
    return (
        <>
        <h1>Kaise ho app log</h1>
        <Third count={count} setCount={setCount}/>
        </>
        
    )
}