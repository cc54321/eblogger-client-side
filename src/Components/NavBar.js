import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBar">
            <Link to="/">Home</Link>
            <Link to="/new-blog-page">New Blog</Link>
            <Link to="/login-page">Login</Link>
            <Link to="/register-page">Register</Link>


        </div>
    )
}
export default NavBar;
