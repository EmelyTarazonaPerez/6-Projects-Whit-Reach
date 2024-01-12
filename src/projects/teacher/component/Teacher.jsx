import React, { useContext } from 'react'
import { Context } from '../context/Context'
import './style/Flag.css'

function Teacher() {
    const { info } = useContext(Context)
    const alumno = info[3].idioma
    console.log(info[alumno].foto)
    return (
        <>
            <div className='container-photo'>
                <div className='photo'>
                    <img src={info[alumno].foto} alt='...' />
                </div>
            </div>
            <h1 className='caption'>Profesora:</h1>
            <div className='name'>{info[alumno].nombre}</div>
        </>
    )
}

export default Teacher