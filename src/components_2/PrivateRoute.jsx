import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let auth // determinar si está autorizado, por contexto o como lo esté haciendo
    auth = true

    // Si está autorizado, devuelve una salida que generará elementos secundarios
    // Si no, devuelve el elemento que navegará a la página de inicio de sesión
    return auth ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute;
