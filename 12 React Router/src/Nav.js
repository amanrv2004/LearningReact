import {Link} from "react-router";


export default function Nav(){
    return (
        <>
        <nav>
                 <Link to="/">Home</Link>
                 <Link to="/Contact">Contact</Link>
                 <Link to="/Dashboard">Dashboard</Link>
        </nav>
        </>
    )
}