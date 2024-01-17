import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../page/home/home';
import PageForm from '../page/form/pageForm';

const Routes1 = () => {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home/>} />
                <Route path='form' element={<PageForm/>}/>
            </Routes>
        </>

    );
}

export default Routes1;
