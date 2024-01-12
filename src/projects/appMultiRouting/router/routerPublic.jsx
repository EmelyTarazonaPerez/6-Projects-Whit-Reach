import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Context from '../context/context'

const RouterPublic = ({ children }) => {
    const { estado } = useContext(Context)
    
    return ((!estado)
        ? children
        : <Navigate to="/contentido1" />
    )
}

export default RouterPublic