import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
import Context from '../../context/context';
const Navbar = () => {
    const {unlog} =useContext(Context)
    const navegation = useNavigate();
    const login = () => {
        navegation('/login', { replace: true })
        unlog()
    }

    return (
        <nav>
            <div className='group-nav'>
                <h1 className='tittle_content1'>YOUR SECRET</h1>
                <div className='nav-bar'>
                    <div className='nav'>
                        <NavLink className='link' to="finance">Finance</NavLink>
                    </div>
                    <div  className='nav'>
                        <NavLink className='link' to="love">Love</NavLink>
                    </div>
                </div>
            </div>


            <button  className='link button-go-login' onClick={login}>Logout</button>
        </nav>
    );
}

export default Navbar;
