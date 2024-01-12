import { React, useContext } from 'react'
import { Context } from '../context/Context'
import './style/Flag.css'

export default function Location() {

  const { info } = useContext(Context)
  const idioma = info[3].idioma

  return (
    <div className='location'>
      <h1 className='caption'>Ubicacion</h1>
      <div className='text'>
        <p>{info[idioma].direccion}</p>
      </div>
    </div>
  )
}
