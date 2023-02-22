import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CardContacto = (props) => {

    const navigate = useNavigate();
    const url = 'http://localhost:4000/modificarContacto';
    const deleteurl = 'http://localhost:4000/eliminarContacto';
    console.log(props)

    function addFavorite(id) {
        console.log("id" + id);
        axios
            .post(url, {
                nombre: props.nombre,
                apellido: props.apellido,
                telefono: props.telefono,
                correo: props.correo,
                favorito: 1,
                idContacto: id
            })
            .then((response) => {
                console.log(response.data);
                alert('Contacto agregado a Favoritos: ' + props.nombre + ' ' + props.apellido);

            });
        navigate("/contacts");
    }

    function deleteContact(id) {
        
        console.log("id: " + id);
        axios
            .post(deleteurl, {
                idContacto: id
            })
            .then((response) => {
                console.log(response.data);
                alert('Contacto Eliminado correctamente: ' + props.nombre + ' ' + props.apellido);

            });
        navigate("/contacts");
    }

    if (props.tipo === 0) {
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
                            {
                                props.favorito === 1
                                    ? (<button type="button" className="button-44 btn-outline-warning" disabled>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg> Favoritos
                                    </button>
                                    )
                                    : (<button type="button" className="button-43 btn-outline-warning" onClick={(e) => addFavorite(props.idContacto)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg> Favoritos
                                    </button>
                                    )
                            }
                            <button type="button" className="button-42 btn-outline-danger" onClick={(e) => deleteContact(props.idContacto)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg> Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
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
                            <button type="button" className="button-44 btn-outline-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg> Quitar Favorito
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}