import React from 'react';
import Routes1 from '../router/router';
import Provide from '../context/provide';

const App = () => {
    return (
        <Provide>
            <Routes1 />
        </Provide>
    );
}

export default App;
