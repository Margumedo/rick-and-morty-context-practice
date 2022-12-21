import React, {useContext} from "react";
import { AppContext } from "../AppContext.js";

const Contact = ()=>{

    const {name, lastName} = useContext(AppContext)

    return(
        <>
        <h1>Hola desde Contactos, soy {name} {lastName} </h1>
        </>
    );
}

export default Contact;