import React from "react";
import { Outlet, Link } from "react-router-dom";

export interface NavBarProps{}

 const NavBar:React.FC<NavBarProps> = ()=>{
    return(
        <div >
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Form'>Form</Link>
                <Link to='/About'>About</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar