import { Outlet ,Link } from "react-router";

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