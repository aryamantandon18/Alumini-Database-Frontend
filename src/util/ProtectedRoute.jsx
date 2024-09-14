import React, {useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

function ProtectedRoute() {
    const { isAuthenticated } = useContext(AuthContext)

    return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
}

export default ProtectedRoute