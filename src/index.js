import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import About from '../components/About'
import Home from '../components/Home'
import ContactMe from '../components/Contact'
import Portafolio from '../components/Portafolio'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/portafolio" element={<Portafolio />} />
        </Routes>
    </BrowserRouter>
);
