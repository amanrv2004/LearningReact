import { useEffect ,useState } from "react";
import { useParams } from "react-router"


export default  function Github(){

    // const data = useParams();
    // console.log(data.name);

    const {name} = useParams();
    const [Profile,setProfile] = useState(null);
    async function fetchuser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }
    useEffect(()=>{
        fetchuser();
    },[name]);

    return(
        <>
        <h1>My Github Profile</h1>

        {/* Display users Data */}
        <div>
            <img src={Profile?.avatar_url} alt="Profile" />
            <h2>User ID : {Profile?.login}</h2>
            <h1>{Profile?.name}</h1>
            <h3>{Profile?.bio}</h3>
            <a href={Profile?.url}>Open Full Github Profile</a>
            <a href={Profile?.blog}>Open Company Website</a>
        </div>
        </>
    )
}