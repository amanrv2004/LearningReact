import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body() {
  // const [Profile, setProfile] = useState([]);

  // const [numberOfProfile, setnumberOfProfile] = useState("");

  // async function generateProfile(count) {
  //   const rand = Math.floor(Math.random() * 9999 - 1000 + 1) + 1000;
  //   const response = await fetch(`https://api.github.com/users?since=${rand}&per_page=${count}`);
  //   const data = await response.json();
  //   setProfile(data);
  // }
  // useEffect(() => {
  //   generateProfile(10);
  // }, [])
  
  // Custom Hook useFetch is used here.
  const {generateProfile,numberOfProfile,setnumberOfProfile,Profile} = useFetch();



  return (
    <>
      <div className="but">
        <input type="text" className="input" placeholder="Search no of Profiles" value={numberOfProfile} onChange={(e) => setnumberOfProfile(e.target.value)}></input>
        <button onClick={() => generateProfile(Number(numberOfProfile))}>Search</button>
      </div>
      <div className="profiles">
        {
          Profile.map((value) => {
            return (<div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">Profile</a>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Body;