import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='row'>
            <div className='bg'>
                <div className='bg-link'>
                    <NavLink className="link" to='/'>Home</NavLink>
                    <NavLink className="link" to='/pagina2/atanagildo'>Atanagildo</NavLink>
                    <NavLink className="link" to='/pagina2/ataulfo'>Ataulfo</NavLink>
                    <NavLink className="link" to='/pagina2/ervigio'>Ervigio</NavLink>
                    <NavLink className="link" to='/pagina2/leovigildo'>Leovigildo</NavLink>
                    <NavLink className="link" to='/pagina2/recesvinto'>Recesvinto</NavLink>
                    <NavLink className="link" to='/pagina2/sisebuto'>Sisebuto</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;
