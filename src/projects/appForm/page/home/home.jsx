import React, { useContext, useState } from 'react';
import './home.css'
import icon from './image 4.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form"
import zones from "../../data/data.json"
import questions from "../../data/questions.json"
import Context from '../../context/context';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [bottonDisabled, setBottonDisabled] = useState(true);

    const { stage, setStage, setInformation, summary } = useContext(Context)

    const { register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();

    const get = (zone) => {
        const zoneCheck = zones.find(item => item.location === zone.valor)
        setInformation(zoneCheck)
        console.table(summary)
        setStage(stage + 1)
        navigate('/form')
    }
    return (
        <div className='container'>
            <section>
                <img src={icon} alt='icon' />
                <h1>TRAVEL AGENCY.</h1>
            </section>
            <form onSubmit={handleSubmit(get)}>
                <section className='select_zones'>
                    {
                        zones.map(item =>
                            <article className='card_vacation'>
                                <div className='box_img'>
                                    <img className='img_figure' src={item.src} alt='machu' />
                                    <div className='container_info'>
                                        <b>{item.name}</b>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div className='box_input'>
                                    <input type="radio" id='montain' name='vacation' value={item.location} {...register('valor')} />
                                    <label for={item.location}>{item.location} ({item.price})</label>
                                </div>
                            </article>
                        )
                    }
                </section>
                <p>{questions[stage].text}</p>
                <button type='submit'>
                    <b>continue</b>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>

        </div>
    );
}

export default Home;
