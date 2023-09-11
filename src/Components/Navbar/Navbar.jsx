import React from "react";
import { Link } from "react-router-dom";
import c from "./Navbar.module.css";


const Navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={c.dropdown}>
            <Link to={'/MainPage'}>Main page</Link>
                <div className={c.dropdown_content}>
                    <p><Link to={'/Recommended'}>Recommended</Link></p>
                    <p><Link to={'/Newest'}>Newest</Link></p>
                </div>
            </div>
            
            <div><Link to={'/Library'}>Library</Link></div>
            <div><Link to={'/Favourites'}>Favourites</Link></div>
        </div>
    )
}

export default Navbar;