import React from 'react'
import {Link} from 'react-router-dom';

export const Navegacion = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='banner'>
                    <h2 className='titulo'>MIS CONTACTOS APP</h2>
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/contacts">Contactos</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/about">Acerca</Link>
                </li>

            </ul>
            </div>
        </div>
    </nav>
    <br/>
    </>
  )
}