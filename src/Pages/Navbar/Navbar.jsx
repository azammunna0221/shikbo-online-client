import { Link, NavLink } from "react-router-dom";
import Theme from "../../Components/Theme";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Instructors</NavLink></li>
                            <li><NavLink>Classes</NavLink></li>
                            <li><NavLink>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Shikhbo Online</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Instructors</NavLink></li>
                        <li><NavLink>Classes</NavLink></li>
                        <li><NavLink>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Theme></Theme>
                    {
                        user ? <>
                        <button onClick={handleLogout} className="btn">Logout</button> </> : <>
                        <Link to="/login" className="btn">Login</Link> </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;