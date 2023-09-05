import React from "react";
import { Link } from "react-router-dom";
import c from "./Navbar.module.css";


const Navbar = () => {
    return(
        <div className={c.navbar}>
            <div><Link to={'/MainPage'}>Main page</Link></div>
            <div><Link to={'/Page1'}>Page 1</Link></div>
            <div><Link to={'/Page2'}>Page 2</Link></div>
        </div>
        )
}

export default Navbar;