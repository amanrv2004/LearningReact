// Custom Hook
import { useState , useEffect } from "react";

export default function useFetch(){
  const [Profile, setProfile] = useState([]);
  const [numberOfProfile, setnumberOfProfile] = useState("");
  async function generateProfile(count) {
    const rand = Math.floor(Math.random() * 9999 - 1000 + 1) + 1000;
    const response = await fetch(`https://api.github.com/users?since=${rand}&per_page=${count}`);
    const data = await response.json();
    setProfile(data);
  }
  useEffect(() => {
    generateProfile(10);
  }, []);
  
  return {generateProfile,numberOfProfile,setnumberOfProfile,Profile}
}