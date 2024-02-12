import React, { useState } from 'react'
import MyKings from './kings'

function HomeReyes() {
    const kings = [
        {
            name: "Atanagildo",
            color: "darkolivegreen",
            price: 178
        }, {
            name: "Ervigio",
            color: "crimson",
            price: 169
        }, {
            name: "Ataúlfo",
            color: "peru",
            price: 81
        }, {
            name: "Leogivildo",
            color: "darkmagenta",
            price: 126
        }, {
            name: "Recesvinto",
            color: "royalblue",
            price: 141
        }, {
            name: "Sisebuto",
            color: "teal",
            price: 69
        }
    ]

    const [price, setPrice] = useState(0);

    return (
        <>
        <h1>Total to pay: {price} €</h1>
            <div className='page'>
                <div className='container'>
                    <div className='wrapper'>
                        <MyKings
                            name={kings[0].name}
                            color={kings[0].color}
                            price={kings[0].price}
                            img={'https://www.html6.es/img/rey_atanagildo.png'}
                            setPrice={setPrice}>
                        </MyKings>
                        <MyKings
                            name={kings[1].name}
                            color={kings[1].color}
                            price={kings[1].price}
                            setPrice={setPrice}
                            img={'https://www.html6.es/img/rey_ervigio.png'}>
                        </MyKings>
                        <MyKings
                            name={kings[2].name}
                            color={kings[2].color}
                            price={kings[2].price}
                            setPrice={setPrice}
                            img={'https://www.html6.es/img/rey_ataúlfo.png'}>
                        </MyKings>
                        <MyKings
                            name={kings[3].name}
                            color={kings[3].color}
                            price={kings[3].price}
                            setPrice={setPrice}
                            img={'https://www.html6.es/img/rey_atanagildo.png'}>
                        </MyKings>
                        <MyKings
                            name={kings[4].name}
                            color={kings[4].color}
                            price={kings[4].price}
                            setPrice={setPrice}
                            img={'https://www.html6.es/img/rey_leogivildo.png'}>
                        </MyKings>
                        <MyKings
                            name={kings[5].name}
                            color={kings[5].color}
                            price={kings[5].price}
                            setPrice={setPrice}
                            img={'https://www.html6.es/img/rey_recesvinto.png'}>
                        </MyKings>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeReyes