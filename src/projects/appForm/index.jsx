import React from 'react';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const Index = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </div>
    );
}

export default Index;
