import React from 'react'
import {BrowserRouter as Router, Routes ,Route, Navigate, HashRouter, Link} from 'react-router-dom' //as (como) es para asignarle un alias, como el nombre browserRouter es largo es buena practica cambiarlo a Router
import Home from './Home'
import AcercaDe from './AcercaDe'
import Contacto from './Contacto'
import NotFound from './NotFound'
import MenuBasico from './MenuBasico'
import Usuario from '../pages/Usuario'
import Productos from '../pages/Productos'
import ReactTopics from '../pages/ReactTopics'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from './PrivateRoute'


function ConceptosBasicos() {
    return (
        <>
            <h2>Hash Router</h2>
            <HashRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/acerca'>Acerca de</Link>
                    <Link to='/contacto'>Contacto</Link>
                </nav>
                <Routes>
                    <Route path='/'element={<Home/>}/>

                    <Route path='/acerca' element={<AcercaDe/>}/>

                    <Route path='/contacto' element={<Contacto/>}/>
                </Routes>

            </HashRouter>
            <h2>Conceptos Basicos</h2>
            <Router>
                <MenuBasico/>
                <Routes>

                    <Route path='/'element={<Home/>}/>

                    <Route path='/acerca' element={<AcercaDe/>}/>

                    <Route path='/contacto' element={<Contacto/>}/>

                    <Route path='/usuario/:username' element={<Usuario/>}/> {/* parametros */}

                    <Route path='/productos' element={<Productos/>}/> {/* paguinado */}

                    <Route path='/about' element={<> <Navigate to='/acerca'/> </>}/> {/* redirige al componente pasado en el element */}

                    <Route path='/react/*' element={<ReactTopics/>}/>{/* se usa /* para que los hijos capturen el path del padre */}

                    <Route path='/login' element={<Login/>}/>

                    <Route path='/dashboard' element={<PrivateRoute/>}>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                    </Route>

                    <Route path='*' element={<NotFound/>} /> 

                </Routes>
            </Router>
        </>
    )
}

export default ConceptosBasicos
