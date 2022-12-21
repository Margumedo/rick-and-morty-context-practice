import React, { createContext, useState } from "react";

export const AppContext = createContext();         //creo mi contexto dentro de una variable y lo exporto

export const AppContextProvider = (props)=>{            //creo mi componente proveedor

    const [state, setState] = useState({
        name: "Maicol",
        lastName: "Argumedo"
    });
    return(
        <AppContext.Provider value={state} >
            {props.children}
        </AppContext.Provider>
    );

}