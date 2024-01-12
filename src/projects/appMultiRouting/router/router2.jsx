import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Content1 from '../layout/pages/finance'
import Content2 from '../layout/pages/love'
import Navbar from '../layout/navbar/navbar';

const Router2 = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="finance" element={<Content1 />} />
                <Route path='love' element={<Content2 />} />
                <Route path='/' element={<Navigate to="finance" />} />
            </Routes>
        </>
    );
}

export default Router2;
