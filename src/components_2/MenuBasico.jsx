import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function MenuBasico() {
    return (
        <nav>
            <ol>
                <li>
                    <span>Componente Link</span><br />
                    <Link to='/'>Home</Link>
                    <Link to='/acerca'>Acerca de</Link>
                    <Link to='/contacto'>Contacto</Link>
                </li>

                <li>
                    <span>Componente NavLink</span><br />
                    <NavLink to='/' activeclassname='active'>home</NavLink>
                    <NavLink to='/acerca' activeclassname='active'>Acerca de</NavLink>
                    <NavLink to='/contacto' activeclassname='active'>Contacto</NavLink>
                </li>

                <li>
                    <span>Parametros</span><br />
                    <Link to='/usuario/tavo'>Tavo</Link>
                    <Link to='/usuario/Agus'>Agus</Link>
                    <Link to='/usuario/Belu'>Belu</Link>
                </li>

                <li>
                    <span>Parametros de Consulta</span><br />
                    <Link to='/productos'>Productos</Link>
                </li>

                <li>
                    <span>Redirecciones</span><br />
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <span>Rutas Anidadas</span><br />
                    <Link to='/react'>React</Link>
                </li>

                <li>
                    <span>Rutas rivadas</span><br />
                    <Link to='/login'>Login</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ol>
        </nav>
    )
}

export default MenuBasico
