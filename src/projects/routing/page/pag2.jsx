import React from 'react'
import { useParams } from 'react-router-dom'
export default function Pag2() {

  const { key } = useParams()
  return (
    <div className='row'>
      <div className='bg'>
        <img src={`https://www.html6.es/img/rey_${key}.png`} alt='ms' />
        <h1 className='name_king'>{key}</h1>
      </div>
    </div>

  )
}
