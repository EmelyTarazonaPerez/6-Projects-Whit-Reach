import React from 'react';
import Router1 from '../router/router1';
import Provide from '../context/provide';

const App = () => {
    return (
        <Provide>
            <Router1 />
        </Provide>
    );
}

export default App;
