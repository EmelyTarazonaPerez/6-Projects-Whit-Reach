
import React from 'react'
import './misReyes.css'

function MyKings({name, color, price, img, setPrice}) {   
  
  const methodBuy = (element) =>{
    setPrice((e) => e + price) 
    element.target.parentNode.style.display = 'none'   

  }
  return (
    <div className='card' style={{backgroundColor: color}}>
        <p>{name}</p>
        <img src={img} alt='alt'/>
        <p>Price:</p>
        <p>{price} €</p>
        <button onClick={methodBuy}>Buy</button>
    </div>
  )
}

export default MyKings
