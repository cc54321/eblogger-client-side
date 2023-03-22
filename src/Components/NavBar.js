
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div id="navBar">
            <Link to="/">Home</Link>
            <Link to="/get-one-example">Featured Blog Post</Link>


        </div>
    )
}
export default NavBar;