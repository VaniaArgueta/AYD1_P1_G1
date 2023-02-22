import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ModificarContacto } from './ModificarContacto';
import { ModuloContactos } from './ModuloContactos';
import { ListaContactosModificar } from './ListaContactosModificar';

export const CardModif = (props) => {

    const url = 'http://localhost:4000/modificarContacto';

    const formModContacto = () => {  
        return (
            <ModificarContacto/>
       );
    }
    const modulo = () => {
        return (
            <ModuloContactos tipo={4} />
        )
    }
    //return formModContacto();
    function Modificar() {
        console.log(props)
        ListaContactosModificar();
    }
    return (
        <div style={{ width: "max-width: 400px", padding:"2px" }}>
            <div className="card" >
                <div className="row">
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#527397" className="bi bi-person-circle img-fluid rounded-start" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                    <div className="col-6">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre + ' ' + props.apellido}</h5>
                            <p className="card-text">{props.telefono}</p>
                            <p className="card-text">{props.correo}</p>
                            <p className="card-text" style={{ visibility: "hidden" }}>{props.idContacto}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <br></br>
                        <button type="button" className="button-42 btn-outline-danger" onClick={(e) => Modificar(props)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg> Modificar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}