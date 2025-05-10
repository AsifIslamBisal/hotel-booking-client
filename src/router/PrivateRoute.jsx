import React, { Children, useContext } from 'react';
import authContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/signIn" state={location.pathname}></Navigate>

};

export default PrivateRoute;