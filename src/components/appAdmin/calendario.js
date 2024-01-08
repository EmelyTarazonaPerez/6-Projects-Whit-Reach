import React, { useReducer } from 'react';
/* constantes*/
const currentTime = new Date()
const month = currentTime.getMonth()
const year = currentTime.getFullYear()
const arrayMount = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
    "Diciembre"
]
const initialValue = { m: month, a: year }
const reducer = (state, action) => {
    let newMonth = state.m
    let newYear = state.a

    switch (action.type) {
        case "nextMonth":
            newMonth = newMonth == 11 ? 0 : newMonth + 1;
            break;

        case "lastMonth":
            newMonth = newMonth == 0 ? 11 : newMonth - 1;
            break;

        case "nextYear":
            newYear = newYear + 1;
            break;

        case "lastYear":
            newYear = newYear - 1;
            break;
        default:
            break;
    }
    return { m: newMonth, a: newYear };
}



const Calendario = () => {
    const [date, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h1 style={(date.m < month && date.a <= year || date.a < year)? {color:'red'}: {color: 'green'}} >
                {arrayMount[date.m]} ({date.a})
            </h1>

            <div>
                <h2>Month</h2>
                <button onClick={() => dispatch({ type: 'nextMonth' })}>+</button>
                <button onClick={() => dispatch({ type: 'lastMonth' })}>-</button>
            </div>

            <div>
                <h2>year</h2>
                <button onClick={() => dispatch({ type: 'nextYear' })}>+</button>
                <button onClick={() => dispatch({ type: 'lastYear' })}>-</button>
            </div>
        </div>
    );
}

export default Calendario;
