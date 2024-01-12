import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from '../layout/pages/login';
import Recovery from '../layout/pages/recovery';
import Router2 from './router2';
import Navbar from '../layout/navbar/navbar'
import RouterPublic from './routerPublic'
import PrivateRouter from './privateRouter';

const Router1 = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    <RouterPublic>
                        <Login />
                    </RouterPublic>
                } />
                <Route path='recuperacion' element={
                    <RouterPublic>
                        <Recovery />
                    </RouterPublic>
                } />
                <Route path='/*' element={
                    <PrivateRouter>
                        <Router2 />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    );
}

export default Router1;
