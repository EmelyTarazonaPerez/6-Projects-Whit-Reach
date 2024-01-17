import React, { useContext } from 'react';
import questions from '../../data/questions.json'
import Context from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import './pageForm.css'
const PageForm = () => {
    const { stage } = useContext(Context)
    const navigate = useNavigate();

    if (stage === 0) {
        navigate('/home')
    }

    console.log(questions[stage])
    return (
        <form>
            <h2>{questions[stage].text}</h2>
            <section className='questions'>
                {
                    stage > 0
                        ? questions[stage].questions.map(item =>
                            <div>
                                <label>{item.question}</label>
                                <input className='input_question'></input>
                            </div>
                        )
                        : <>{ }</>
                }
            </section>
            <button>continue <FontAwesomeIcon icon={faArrowRight}/> </button>
        </form>
    );
}

export default PageForm;
