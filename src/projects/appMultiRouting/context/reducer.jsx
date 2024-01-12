import React from 'react';

export const types = {
    login: 'login',
    logout: 'logout'
}

const Reducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                estado: true
            }
        case types.logout:
            return {
                estado: false
            }
        default:
            return state;
    }
}

export default Reducer
