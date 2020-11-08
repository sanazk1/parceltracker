//React core
import React from "react";
import logo from "../../assets/images/logo.png";
 
export default function Header() {
    //console.log("Header component")
    //console.log(data);

    return (
        <header className={"header"} >
        <a href="#" >
            <img src={logo} alt= "Logo of the yellow company" />
        </a>
       
    </header>
    );
}