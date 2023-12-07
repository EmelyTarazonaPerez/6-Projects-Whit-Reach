import React, { useContext } from 'react';
import spain from '../assets/spain.jpg'
import uk from '../assets/uk.png'
import francia from '../assets/francia.png'
import './style/Flag.css'
import { Context } from '../context/Context';

const Flag = () => {
   const {info, setInfo} = useContext(Context)
    
    const changeLenguaje1 = () => {
        // eslint-disable-next-line eqeqeq
        setInfo(info.map((item, indice) => indice == 3 ? {...item, idioma : 0} : {...item}))
    }

    const changeLenguaje2 = () => {
        // eslint-disable-next-line eqeqeq
        setInfo(info.map((item, indice) => indice == 3 ? {...item, idioma : 1} : {...item}))
    }

    const changeLenguaje3 = () => {
        // eslint-disable-next-line eqeqeq
        setInfo(info.map((item, indice) => indice == 3 ? {...item, idioma : 2} : {...item}))
    }

    return (
        <div className='box-flag'>
            <img className='lenguage' onClick={changeLenguaje1} src={spain} alt=".." />
            <img className='lenguage' onClick={changeLenguaje2} src={uk} alt=".." />
            <img className='lenguage' onClick={changeLenguaje3} src={francia} alt=".." />
        </div>
    );
}

export default Flag;
