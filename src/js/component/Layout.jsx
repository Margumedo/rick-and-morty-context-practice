import React from "react";
import Menu from "./Menu.jsx";


const Layout = (props)=>{
    return(
        <>
        <Menu/>
        {props.children}  
        </>
    );
}


export default Layout;