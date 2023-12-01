
import React from 'react'
import './misReyes.css'

function MisReyes({nombre, color, precio, img, setPrecio}) {   
  
  const comprar = (element) =>{
    setPrecio((e) => e + precio) 
    element.target.parentNode.style.display = 'none'   

  }
  return (
    <div className='card' style={{backgroundColor: color}}>
        <p>{nombre}</p>
        <img src={img} alt='alt'/>
        <p>Precio:</p>
        <p>{precio} €</p>
        <button onClick={comprar}>Comprar</button>
    </div>
  )
}

export default MisReyes
