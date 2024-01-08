import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './slide.css'

const Slide = () => {
    return (
        <div className='container_slide'>
            <section className='container_options'>
                <button className='button_slide active'>Home</button>
                <button className='button_slide'>List</button>
                <button className='button_slide'>Profile</button>
            </section>
        </div>
    );
}

export default Slide;
