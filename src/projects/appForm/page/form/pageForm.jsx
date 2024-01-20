import React, { useContext } from 'react';
import questions from '../../data/questions.json'
import Context from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './pageForm.css'
import Card from '../../components/card';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const PageForm = () => {
    const {
        stage,
        dispatch,
        setStage,
        setPriceTotal,
        priceTotal,
        kpiProgress,
        setKpiProgress } = useContext(Context)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navegate = useNavigate()

    const sent = (data) => {
        dispatch({ type: 'information_client', payload: data })
        setKpiProgress(kpiProgress + 33.33)

        if (data.days) calculatePrice(data)
        setStage(stage + 1)
    }

    const calculatePrice = (data) => {
        const priceBedrooms = 30
        const pricePeople = 55;
        setPriceTotal(priceTotal * data.days + (priceBedrooms * data.Bedrooms) + (pricePeople * data.people))
    }

    const printData = () => {
        window.print()
    }
    return (
        <div className='container_page'>
            <div className='container_progress'>
                <div className="progress progress_persoonalized" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: kpiProgress + '%' }}></div>
                </div>
            </div>
            <section className='container_form'>
                <form className='form_questions' onSubmit={handleSubmit(sent)}>
                    <h2>{questions[stage].text}</h2>
                    <hr></hr>
                    <div className='container_questions'>
                        <section className='questions'>
                            {
                                stage > 0 & questions[stage].text !== 'End the form'
                                    ? questions[stage].questions.map(item =>
                                        <>
                                            <div className='group_question'>
                                                <label>{item.question}*</label>
                                                <input className='input_question'
                                                    type={questions[stage].text === 'Enter personal information' ? 'text' : 'number'}
                                                    name={item.question} placeholder=' '
                                                    {...register(item.question, {
                                                        required: item.required,
                                                        min: item.min,
                                                        max: item.max
                                                    })}
                                                />
                                            </div>
                                            {errors[item.question]?.type === 'required' && <p className='message_error'>complete this field</p>}
                                            {errors[item.question]?.type === 'min' && <p className='message_error'>min value {item.min} and max value {item.max}</p>}
                                            {errors[item.question]?.type === 'max' && <p className='message_error'>min value {item.min} and max value {item.max}</p>}
                                        </>
                                    )
                                    : <>{ }</>
                            }
                        </section>
                    </div>

                    <div className='container_bottons'>
                        <button type='button' className='btn_back' onClick={() => {
                            if (stage === 1) navegate('/home')
                            setStage(stage - 1)
                            setKpiProgress(kpiProgress - 33.33)
                        }}>
                            <b>back</b>
                        </button>
                        {stage !== 3
                            ? <button><b>continue</b><FontAwesomeIcon icon={faArrowRight} /> </button>
                            : <button onClick={printData}><b>imprimir</b><FontAwesomeIcon icon={faArrowRight} /> </button>
                        }
                    </div>




                </form>
                <Card />
            </section>
        </div>
    );
}

export default PageForm;
