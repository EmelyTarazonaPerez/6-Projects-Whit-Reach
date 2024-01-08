import React from 'react';
import Slide from '../modules/menu/slide';
import AdminProduct from '../modules/admProduct/adminProduct';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <section className='home_container'>
                <div className='slide'>
                    <Slide></Slide>
                </div>
                <div className='adminProduct'>
                    <AdminProduct></AdminProduct>
                </div>
            </section>
        </div>
    );
}

export default Home;
