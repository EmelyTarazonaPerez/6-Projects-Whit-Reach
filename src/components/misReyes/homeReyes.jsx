import React, { useState } from 'react'
import MisReyes from './misReyes'

function HomeReyes() {
    const reyes = [
        {
            nombre: "Atanagildo",
            color: "darkolivegreen",
            precio: 178
        }, {
            nombre: "Ervigio",
            color: "crimson",
            precio: 169
        }, {
            nombre: "Ataúlfo",
            color: "peru",
            precio: 81
        }, {
            nombre: "Leogivildo",
            color: "darkmagenta",
            precio: 126
        }, {
            nombre: "Recesvinto",
            color: "royalblue",
            precio: 141
        }, {
            nombre: "Sisebuto",
            color: "teal",
            precio: 69
        }
    ]

    const [precio, setPrecio] = useState(0);

    return (
        <>
        <h1>Total a pagar: {precio} €</h1>
            <div className='page'>
                <div className='container'>
                    <div className='wrapper'>
                        <MisReyes
                            nombre={reyes[0].nombre}
                            color={reyes[0].color}
                            precio={reyes[0].precio}
                            img={'https://www.html6.es/img/rey_atanagildo.png'}
                            setPrecio={setPrecio}>
                        </MisReyes>
                        <MisReyes
                            nombre={reyes[1].nombre}
                            color={reyes[1].color}
                            precio={reyes[1].precio}
                            setPrecio={setPrecio}
                            img={'https://www.html6.es/img/rey_ervigio.png'}>
                        </MisReyes>
                        <MisReyes
                            nombre={reyes[2].nombre}
                            color={reyes[2].color}
                            precio={reyes[2].precio}
                            setPrecio={setPrecio}
                            img={'https://www.html6.es/img/rey_ataúlfo.png'}>
                        </MisReyes>
                        <MisReyes
                            nombre={reyes[3].nombre}
                            color={reyes[3].color}
                            precio={reyes[3].precio}
                            setPrecio={setPrecio}
                            img={'https://www.html6.es/img/rey_atanagildo.png'}>
                        </MisReyes>
                        <MisReyes
                            nombre={reyes[4].nombre}
                            color={reyes[4].color}
                            precio={reyes[4].precio}
                            setPrecio={setPrecio}
                            img={'https://www.html6.es/img/rey_leogivildo.png'}>
                        </MisReyes>
                        <MisReyes
                            nombre={reyes[5].nombre}
                            color={reyes[5].color}
                            precio={reyes[5].precio}
                            setPrecio={setPrecio}
                            img={'https://www.html6.es/img/rey_recesvinto.png'}>
                        </MisReyes>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeReyes