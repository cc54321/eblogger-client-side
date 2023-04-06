import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
    return (
        <div>
            <h1 id="pageHeader">Welcome To E Blogger</h1>
            <NavBar />
            <Outlet/>
        </div>
    );
}

export default Layout;