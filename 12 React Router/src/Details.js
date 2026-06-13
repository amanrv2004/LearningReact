import { Outlet } from "react-router";
import {Link} from "react-router";
import Hello from "./Hello";
import Hi from "./Hi";


export default function Details(){
    return(
        <>
            <nav>
                <Link to="/Details">Details</Link>
                <Link to="Hello">Hello</Link>
                <Link to="Hi">Hi</Link>
            </nav>
            <h1>Details are live.</h1>
            <Outlet></Outlet>
        </>
    )
}