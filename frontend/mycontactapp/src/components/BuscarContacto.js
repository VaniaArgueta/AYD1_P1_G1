import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { CardBusqueda } from './CardBusqueda';

export const BuscarContacto = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [nombre, setNombre] = useState('');
    const [datosAPI, setDatosAPI, datosAPIRef] = useState([]);
    const url = 'http://localhost:4000/buscarContacto';
    
    function charge(item) {
      console.log("No se que hace esto aqui Atte: Byron")
    }

    const cambio = () => {
      setNombre('');
      setShowForm(false);
    }

    const handleClick = () => {
        Buscar(nombre)
        setShowForm(true);
    }

    function Buscar(Nombre) {
      axios.post(url, {
        Name: Nombre  
      })
      .then((response) => {
        setDatosAPI(response.data);
      });
        
    }
    return (
        <>
            
            {!showForm && (
                <>
                  <form>
                    <div className="row">
                        <div className='col-4'>
                          <input type="text" className="form-control" id="inputNombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className='col-4'>
                            <button className="btn btn-primary" onClick={handleClick}>Buscar Contacto</button>
                        </div>
                    </div>
                  </form>
                </>
            )}
            
            {showForm && (
                <div className="rowS">
                    {
                      datosAPI.map((item, index) => {
                        return (
                          <div key={index} onClick={() => charge(item)}>
                            <CardBusqueda
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
                  <button className="btn btn-primary" onClick={() => cambio()}>Regresar</button>
                </div>
            )}
        </>
    );
}
