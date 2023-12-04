import { React, useEffect, useState } from 'react'
import './chistes.css'

function Chistes() {
    const [data, setData] = useState();

    const peticionHTTP = () => {
        const url = "https://api.chucknorris.io/jokes/random"
        const peticion = fetch(url)
        peticion.then((data) => data.json())
            .then((lectura) => {
                setData(
                    lectura.value
                )
                console.log(lectura)
            })
            .catch(() => console.log("hay un error"))
    }

    useEffect(() => {
        peticionHTTP()
    }, []);

    const nextJoker = () => {
        peticionHTTP()
    }

    return (
        <div className='box'>
            <div className='box-display'>
                <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' alt='img' />
                <div>
                    <div className='box-joker'>
                        <blockquote className='joker'>
                            <p>{data}</p>
                        </blockquote>
                    </div>
                    <button className='next-joker' onClick={nextJoker}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default Chistes