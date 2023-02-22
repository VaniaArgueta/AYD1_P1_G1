import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CardContacto } from './CardContacto';

export const ListaFavoritos = (props) => {

  // props.tipo = 0 -> listado de todos los contactos
  // props.tipo = 1 -> listado de favoritos
  const url = 'http://localhost:4000/mostrarListadoFavoritos';

  const [datosAPI, setDatosAPI] = useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  function charge(item) {

    console.log(item);
    axios.get(url).then((response) => {
      setDatosAPI(response.data);      
    });
  }

  return (
    <>
      <div className="rowS">
        {
          datosAPI.map((item, index) => {
            return (
              <div key={index} onClick={() => (charge(item))}>
                <CardContacto
                  tipo={1}
                  nombre={item.nombre}
                  apellido={item.apellido}
                  telefono={item.telefono}
                  correo={item.correo}
                  idContacto={item.idContacto}
                  item={item}
                  key={index}
                />
              </div>
            )
          })
        }
      </div>
    </>
  );
}