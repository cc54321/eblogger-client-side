import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBar">
            <Link to="/">Home</Link>
            <Link to="/create-one">Create Blog</Link>
            {/* <Link to="/get-one/:id">Create Blog</Link> */}


        </div>
    )
}
export default NavBar;
