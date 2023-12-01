/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from 'react';
import './convertidor.css'

function Convertidor() {
  const cambios = [1, 118.6, 4543.5, 23.2, 1.14]
  const [state, setState] = useState(cambios);
  const handlerOnChange = (e) => {
    let numero = e.target.value
    let nuevoValor = cambios.map(item => item * numero)
    setState(nuevoValor)
  }
  return (
      <main className="App-header">
        {/*<button onClick={siguiente}>Siguiente</button>
        <p>La aficion principal de {aficion.nombre} es {aficion.aficion}</p> */}
        <div className='group-input'>
          <label htmlFor='euro'>Euros</label>
          <input id='euro' type='number' onChange={handlerOnChange} ></input>
        </div>
        <div className='group-input'>
          <label htmlFor='colombiano'>Peso colombiano</label>
          <input id='colombiano' type='number' value={state[1]} ></input>
        </div>
        <div className='group-input'>
          <label htmlFor='argentino'>Peso argentino</label>
          <input id='argentino' type='number' value={state[2]} ></input>
        </div>
        <div className='group-input'>
          <label htmlFor='mexicano'>Mexicano</label>
          <input id='mexicano' type='number' value={state[3]} ></input>
        </div>
        <div className='group-input'>
          <label htmlFor='dolar'>Dolar</label>
          <input id='dolar' type='number' value={state[4]} ></input>
        </div>
      </main>

  )
}

export default Convertidor