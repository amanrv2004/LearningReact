import { useEffect } from "react";
import { useParams } from "react-router"


export default  function Github(){

    // const data = useParams();
    // console.log(data.name);

    const {name} = useParams();
    const [profile,setProfile] = useState(null);
    async function fetchuser() {
        const resopnse = await fetch(`http://localhost:1234/Github/${name}`)
        const data = await resopnse.json();

    }
    useEffect(()=>{
        fetchuser();
    },)
    return(
        <>
        <h1>My Github Profile</h1>

        {/* Display users Data */}
        <h2>{name}</h2>
        </>
    )
}