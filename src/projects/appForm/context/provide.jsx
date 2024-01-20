import React, { useReducer, useState } from 'react';
import Context from './context';

const valueInitial = {
    src: '',
    location: '',
    price: '',
    name: '',
    lastname: '',
    gmail: '',
    bedrooms: '',
    people: '',
    day: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'section_zone':
            state.src = action.payload.src
            state.location = action.payload.location
            state.price = action.payload.price
            state.name = ''
            state.lastname = ''
            state.bedrooms = ''
            state.bedrooms = ''
            state.people = ''
            state.day = ''
            break;

        case 'information_client':
            state.name = action.payload.name
            state.lastname = action.payload.Lastname
            state.gmail = action.payload.Gmail
            if (action.payload.Bedrooms) state.bedrooms = action.payload.Bedrooms
            if (action.payload.people) state.people = action.payload.people
            if (action.payload.days) state.day = action.payload.days
            break;
        default:
            break;
    }
    return state
}


const Provide = ({ children }) => {
    const [stage, setStage] = useState(0);
    const [summary, dispatch] = useReducer(reducer, valueInitial);
    const [priceTotal, setPriceTotal] = useState(0);
    const [kpiProgress, setKpiProgress] = useState(0);


    return (
        <Context.Provider value={{
            stage,
            setStage,
            summary,
            dispatch,
            priceTotal,
            setPriceTotal,
            kpiProgress,
            setKpiProgress
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provide;
