import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

//context
import { AppContextProvider } from "../AppContext.js"

//componentes
import Layout from "../component/Layout.jsx";
import Home from "../views/Home.jsx";
import Contact from "../views/Contact.jsx";
import About from "../views/About.jsx";
import CharacterDetail from "../component/CharacterDetail.jsx";
import NotFound from "../views/NotFound.jsx";

const App = () => {
    return (
        <>
            
            <BrowserRouter>
                <AppContextProvider>
                    <Layout>
                        <Routes>
                            {/* aqui van las rutas */}
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/character/:character_id" element={<CharacterDetail />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </AppContextProvider>
            </BrowserRouter>
        </>

    );
}

export default App;