import React from 'react';
import App from './app/app'
import './index.css'
import abstract_bg from './img/abstract_background.svg'

import { BrowserRouter } from 'react-router-dom';

const Index = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <App />
                <img className='asbtract_bg' src={abstract_bg} alt='ico' />
            </div>
        </BrowserRouter>

    );
}

export default Index;
