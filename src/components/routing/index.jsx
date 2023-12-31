import React from 'react';
import Pag1 from './page/pag1';
import Pag2 from './page/pag2';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './page/error404';
import Nav from './nav/nav';

const Index = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route path="" element={<Pag1 />} />
                    <Route path="pagina2/:key" element={<Pag2 />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default Index;
