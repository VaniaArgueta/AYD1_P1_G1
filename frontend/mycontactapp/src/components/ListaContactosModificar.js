import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export const ListaContactosModificar = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [data, setData] = useState([]);
    
    // props.tipo = 0 -> listado de todos los contactos
    // props.tipo = 1 -> listado de favoritos
    const url = 'http://localhost:4000/mostrarListado';
    const urlModificar = 'http://localhost:4000/modificarContacto';
    const urlObtener = 'http://localhost:4000/obtenerContacto';



    const [datosAPI, setDatosAPI, datosAPIRef] = useState([]);
    let [nombre, setNombre] = useState('');
    let [apellido, setApellido] = useState('');
    let [telefono, setTelefono] = useState('');
    let [correo, setCorreo] = useState('');
    let [favorito, setfavorito] = useState('');
    let [idContacto, setidContacto] = useState('');

    function onSubmit(e) {
        e.preventDefault();
    
        var valido = true;
    
        if (nombre === "") {
          alert('El nombre no debe estar vacío');
          valido = false;
          return;
        }
    
        const regexTelefono = /^[0-9]{8}$/;
        if (telefono.match(regexTelefono)) {
          console.log("teléfono válido");
        } else {
          valido = false;
          alert(telefono + "Teléfono con formato incorrecto");
          return;
        }
    
        const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (correo.match(regexCorreo)) {
          console.log("correo válido");
        } else {
          valido = false;
          alert("Correo con formato incorrecto");
          return;
        }
    
        if (valido) {
          axios
            .post(urlModificar, {
              nombre: nombre,
              apellido: apellido,
              telefono: telefono,
              correo: correo,
              favorito: favorito,
              idContacto: idContacto  
            })
            .then((response) => {
              console.log(response.data);
              alert('Contacto agregado: ' + nombre + ' ' + apellido);
            });
    
        }
      }

    useEffect(() => {
        axios.get(url).then((response) => {
        setDatosAPI(response.data);
        });
    }, []);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const handleClick = () => {
        cargar(selectedValue)
        setShowForm(true);
    }

    useEffect(() => {
        axios.get(url).then(response => {
            console.log(response.data)
            setData(response.data);
        });
    }, []);

    function cargar(id) {
        axios
        .post(urlObtener, {
            idContacto: id  
        })
        .then((response) => {
            console.log(response.data);
            response.data.map(item => (
                setNombre(item.nombre) ,
                setApellido(item.apellido),
                setTelefono(item.telefono),
                setCorreo(item.correo),
                setfavorito(item.favorito),
                setidContacto(item.idContacto)
            ))
            
        });
        
    }
    return (
        <>
            
            {!showForm && (
                <>
                    <div className="row">
                        <div className='col-4'>
                            <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                                {data.map(item => (
                                    <option key={item.idContacto} value={item.idContacto}>{item.nombre + " " + item.apellido}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-4'>
                            <button className="btn btn-primary" onClick={handleClick}>Modificar Contacto</button>
                        </div>
                        
                    </div>
                </>
            )}
            
            {showForm && (
                <div className="rowS">
                    <form onSubmit={onSubmit} className="form" id='formModContacto'>
                        <div className="title">Ingrese Datos</div>
                        <div className="mb-2">
                        <label htmlFor="inputNombre" className="form-label">Nombre</label>
                        <input type="text"
                            className="form-control" id="inputNombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-2">
                        <label htmlFor="inputApellido" className="form-label">Apellido</label>
                        <input type="text"
                            className="form-control" id="inputApellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)} />
                        </div>
                        <div className="mb-2">
                        <label htmlFor="inputTelefono" className="form-label">Teléfono</label>
                        <input type="text"
                            className="form-control" id="inputTelefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-2">
                        <label htmlFor="inputCorreo" className="form-label">Correo</label>
                        <input type="text"
                            className="form-control" id="inputCorreo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button className="btn btn-primary" onClick={() => setShowForm(false)}>Regresar</button>
                    </form>
                </div>
            )}
        </>
    );
}
