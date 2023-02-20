import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CardContacto } from './CardContacto';

export const ListaContactos = (props) => {

    // props.tipo = 0 -> listado de todos los contactos
    // props.tipo = 1 -> listado de favoritos
    const url = props.tipo === 0 ? 'http://localhost:4000/mostrarListado': 'http://localhost:4000/mostrarListadoFavoritos'; 
    
    const [datosAPI, setDatosAPI] = useState([]);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDatosAPI(response.data);            
        });
      }, []);

    return (
        <>
        <div className="row ">
            {
              datosAPI.map((item, index) => {
                return(
                  <CardContacto  
                    tipo = {props.tipo}                   
                    nombre={item.nombre} 
                    apellido={item.apellido}                   
                    telefono={item.telefono} 
                    correo={item.correo}  
                    idContacto={item.idContacto}               
                    item={item}                 
                    key={index}
                  />
                )
              })
            }
          </div> 
        </>
    );
}