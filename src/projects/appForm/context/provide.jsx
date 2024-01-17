import React, { useState } from 'react';
import Context from './context';

const summary = []

const Provide = ({ children }) => {
    const [stage, setStage] = useState(0);

    const setInformation = (zone) => {
        summary.push(zone.src)
        summary.push(zone.location)
        summary.push(zone.price)
    }

    return (
        <Context.Provider value={{
            stage,
            setStage,
            summary,
            setInformation
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provide;
