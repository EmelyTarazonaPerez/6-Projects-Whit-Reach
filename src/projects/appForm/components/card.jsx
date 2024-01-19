import React, { useContext, useState } from 'react';
import Context from '../context/context';
import './style.css'

const Card = () => {
    const { summary } = useContext(Context)
    const [priceTotal, setPriceTotal] = useState();

    const total = () => {
        setPriceTotal((summary.price * summary.day) + (20 * summary.badrooms) + ( 30 * summary.people))
    }

    return (
        <div className='container_card'>
            <img className='img_summary' src={summary.src} alt='img' />
            <section>
                <h3>Summary</h3>
                <div className='container_articule'>
                    <article className='articule_text'>
                        <p>zone</p>
                        <p>{summary.location}</p>
                    </article>
                    <article className='articule_text'>
                        <p>$ for day</p>
                        <p>{summary.price}</p>
                    </article>
                    {
                        summary.name &&
                        <>
                            <article className='articule_text'>
                                <p>name</p>
                                <p>{summary.name}</p>
                            </article>
                            <article className='articule_text'>
                                <p>last name</p>
                                <p>{summary.lastname}</p>
                            </article>
                            <article className='articule_text'>
                                <p>gmail</p>
                                <p>{summary.gmail}</p>
                            </article>
                        </>
                    }
                    {
                        summary.bedrooms &&
                        <>
                            <hr></hr>
                            <article className='articule_text'>
                                <p>bedrooms</p>
                                <p>{summary.bedrooms}</p>
                            </article>
                            <article className='articule_text'>
                                <p>Nº of people</p>
                                <p>{summary.people}</p>
                            </article>
                            <article className='articule_text'>
                                <p>Nº of day</p>
                                <p>{summary.day}</p>
                            </article>
                        </>
                    }
                    <h3>Valor:</h3>
                </div>
            </section>

        </div >
    );
}

export default Card;
