import React, { useContext } from 'react';
import questions from '../../data/questions.json'
import Context from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import './pageForm.css'
import Card from '../../components/card';
import { useForm } from 'react-hook-form';
import { type } from '@testing-library/user-event/dist/type';

const PageForm = () => {
    const { stage, dispatch, setStage } = useContext(Context)
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors }, setFocus, reset } = useForm()

    const sent = (valor) => {
        dispatch({ type: 'information_client', payload: valor })
        setStage(stage + 1)
    }

    return (
        <div className='container_page'>
            <div className='container_progress'>
                <div className="progress progress_persoonalized" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar w-75"></div>
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
                                                <input className='input_question' type={questions[stage].text === 'Enter personal information' ? 'text' : 'number'  } name={item.question} placeholder=' '
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
                    <button><b>continue</b><FontAwesomeIcon icon={faArrowRight} /> </button>
                </form>
                <Card />
            </section>
        </div>
    );
}

export default PageForm;
