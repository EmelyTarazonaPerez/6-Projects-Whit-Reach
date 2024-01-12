import React from 'react';
import Context from './context';
import { useReducer } from 'react';
import reducer, { types } from './reducer'

const init = () => {
    const valor = localStorage.getItem("state")
    return {
        estado: !!valor,
    }
}

const Provide = ({ children }) => {

    const log = (user = '') => {
        const action = {
            type: types.login
        }
        localStorage.setItem("estado", true)
        dispatch(action)
    }

    const unlog = () => {
        const action = {
            type: types.logout
        }
        localStorage.removeItem('estado')
        dispatch(action)

    }

    const [logeado, dispatch] = useReducer(reducer, {}, init)
    return (
        <Context.Provider value={{ ...logeado, log, unlog }}>
            {children}
        </Context.Provider>
    );
}

export default Provide;
