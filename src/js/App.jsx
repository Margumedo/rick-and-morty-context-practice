import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//componentes
import Home from "./views/Home";
import Contact from "./views/Contact.jsx";
import About from "./views/About.jsx";
import NotFound from "./views/NotFound.jsx";
import Menu from "./component/Menu.jsx";
import CharacterDetail from "./component/CharacterDetail.jsx";

const App = ()=>{
    return(
        <>

        <BrowserRouter>
            <Menu/>
            <Routes>
                {/* aqui van las rutas */}
                 <Route path="/" element={<Home/>} />
                 <Route path="/contact" element={<Contact/>} />
                 <Route path="/about" element={<About/>} />
                 <Route path="/character/:character_id" element={<CharacterDetail/>} />
                 <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        </>

    );
}

export default App;