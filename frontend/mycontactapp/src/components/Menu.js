import React from 'react';
import { ModuloContactos } from './ModuloContactos';
import { useState } from 'react';

import './../App.css';

export const Menu = () => {
    const [tipo, setTipo] = useState(0);
    
    return (
        <>
            <div className="container">
                <div className="uno">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-book card-img-top" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                    <br></br>
                    <button type="button"
                        className="button-78 btn-outline-primar btn-lg"
                        onClick={() => setTipo(0)}>Mis Contactos</button>
                    <button type="button"
                        className="button-78 btn-outline-primar btn-lg"
                        onClick={() => setTipo(1)}>Mis Favoritos</button>
                    <button type="button"
                        className="button-78 btn-outline-primar btn-lg"
                        onClick={() => setTipo(2)}>Nuevo Contacto</button>
                    <button type="button"
                        className="button-78 btn-outline-primar btn-lg"
                        onClick={() => setTipo(3)}>Editar Contacto</button>
                    <button type="button"
                        className='button-78 btn-outline-primar btn-lg'
                        onClick={() => setTipo(4)}>Buscar Contacto</button>
                    <button type="button"
                        className='button-78 btn-outline-primar btn-lg'
                        onClick={() => setTipo(4)}>BOT??N CALIFICACI??N</button>                    
                </div>
                <div className="dos">
                    <ModuloContactos tipo={tipo} />
                </div>
            </div>
        </>
    );
}