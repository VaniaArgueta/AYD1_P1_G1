import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CardContacto } from './CardContacto';

export const ListaContactos = (props) => {

  // props.tipo = 0 -> listado de todos los contactos
  // props.tipo = 1 -> listado de favoritos
  const url = 'http://localhost:4000/mostrarListado';

  const [datosAPI, setDatosAPI, datosAPIRef] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDatosAPI(response.data);
    });
  }, []);

  function charge(item) {

    if(item.favorito === 1)
      return;

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
              <div key={index} onClick={() => charge(item)}>
                <CardContacto
                  tipo={0}
                  nombre={item.nombre}
                  apellido={item.apellido}
                  telefono={item.telefono}
                  correo={item.correo}
                  favorito={item.favorito}
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