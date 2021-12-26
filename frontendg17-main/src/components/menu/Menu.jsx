import React from 'react'
import Usercomponente from '../user/Usercomponente'
import Mostrarcomponente from '../user/Mostrarcomponente'
import Formulario from '../Formulario'
import Page404 from './Page404'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                    <a class="navbar-brand" href="#">Empresa XYZ</a>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mostrar">Mostrar Componente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/guardar">Guardar Componente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/formulario">Formulario Contacto</a>
                        </li>
                    </ul>
                </nav>

                <Routes>

                    <Route path="*" element={ <Page404></Page404> }></Route>
                    <Route path="/" element={ <Mostrarcomponente></Mostrarcomponente> }></Route>
                    <Route path="/mostrar" element={ <Mostrarcomponente></Mostrarcomponente> }></Route>
                    <Route path="/guardar" element={ <Usercomponente></Usercomponente> }></Route>    
                    <Route path="/formulario" element={ <Formulario></Formulario> }></Route>                    
                </Routes>
            </Router>
        </div>
    )
}

export default Menu
