//React core
import React from "react";
import { Link } from "react-router-dom";


import logo from "../../assets/images/logo.png";
 
export default function Header() {
    //console.log("Header component")
    //console.log(data);

    return (
        <header className={"header"} >
        <a >
        <Link to="/">
            <img src={logo} alt= "Logo of the yellow company" />
        </Link>
        </a>
       
    </header>
    );
}