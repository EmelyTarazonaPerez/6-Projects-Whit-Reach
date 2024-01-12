import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import Teacher from './Teacher'
import Location from './Location'

function Content() {
    const [showTeacher, setShowTeacher] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const { info } = useContext(Context)
    const idioma = info[3].idioma

    const hide1 = () => {
        setShowTeacher(!showTeacher)
        setShowLocation(false)
    }

    const hide2 = () => {
        setShowLocation(!showLocation)
        setShowTeacher(false)
    }

    return (
        <div className='display'>
            <div className='container-content'>
                <div className='container-tittle'>
                    <h1 className='tittle'>{info[idioma].titulo}</h1>
                </div>
                <div className='container-info'>
                    <p className='text'>{info[idioma].texto}</p>
                    <div className='box-button'>
                        <button className='button1' onClick={hide1} >{info[idioma].boton1}</button>
                        <button className='button2' onClick={hide2}>{info[idioma].boton2}</button>
                    </div>
                    {showTeacher

                        ? <>
                            <Teacher></Teacher>
                        </>
                        : null
                    }
                    {showLocation
                        ? <Location></Location>
                        : null
                    }
                </div>


            </div>
        </div>
    )
}

export default Content