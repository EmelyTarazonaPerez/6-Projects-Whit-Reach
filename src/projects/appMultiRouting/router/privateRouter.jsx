import React, { Children } from 'react';
import { useContext } from 'react';
import Context from '../context/context';
import {Navigate} from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {estado} = useContext(Context)
    return ((estado)
        ? children
        : <Navigate to='login' />         
        
    );
}

export default PrivateRouter;
