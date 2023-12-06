import React from 'react';
import spain from '../assert/country/spain.jpg'
import uk from '../assert/country/uk.png'
import francia from '../assert/country/francia.png'
import './style/Flag.css'

const Flag = () => {
    return (
        <div className='box-flag'>
            <img className='lenguage' src={spain} alt=".." />
            <img className='lenguage' src={uk} alt=".." />
            <img className='lenguage' src={francia} alt=".." />
        </div>
    );
}

export default Flag;
