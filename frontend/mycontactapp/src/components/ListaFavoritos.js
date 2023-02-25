import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CardContacto } from './CardContacto';
import { MyDocumentFAV } from './ListaContactosFavoritosPDF';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';

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

  const onClickBtnDescargaPDF = () => {    
    const root = ReactDOM.createRoot(document.getElementById("pruebaPDFFavoritos"));
    root.render(
      <PDFViewer style={{width:"100%", height:"90vh"}}>
        <MyDocumentFAV />
      </PDFViewer>);
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
      <div>
      <button type="button"
                        className='button-78 btn-outline-primar btn-lg'
                        onClick={onClickBtnDescargaPDF}>Ver PDF Contactos Favoritos</button>
      </div>
      <div id="pruebaPDFFavoritos"></div>
    </>
  );
}