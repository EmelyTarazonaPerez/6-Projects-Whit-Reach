import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'
import key from './../../img/Key.svg'
import Context from '../../context/context';
const Login = () => {

    const {log} = useContext(Context)
    const navegation = useNavigate();
    const login = () => {
        navegation('/', { replace: true })
        log('jab')
    }
    return (
        <div className='container_login'>
            <div className='account'>
            <h1>Hack the account </h1>
            <div className='group_input'>
                <input className='input_login' type='password'></input>
                <img className='icono_key' src={key} alt='key' />
            </div>
            <button className='button_login' onClick={login}>Confirm</button>
            <p className='text_recovery'>Recovery password</p>
            </div>
            <div className='welcome'>
                <p>WELCOME</p>
            </div>
            
        </div>
    );
}

export default Login;
