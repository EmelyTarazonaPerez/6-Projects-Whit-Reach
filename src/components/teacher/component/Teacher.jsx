import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Teacher() {

    const image = "./grace.png"
    return (
        <>
            <h1>Profesora:</h1>
            <div className='photo'>
                <img src={image} alt='...' />
            </div>
            <div className='name'>Martha</div>
        </>
    )
}

export default Teacher