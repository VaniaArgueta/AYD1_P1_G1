import React from 'react';
import axios from "axios";
import { useState } from 'react';

export const NuevoContacto = () => {
    const url = 'http://localhost:4000/agregarContacto';
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        
          axios
          .post(url, {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            favorito: 0  // Por defecto, el contacto no será favorito   
          })
          .then((response) => {
            console.log(response.data);
            alert('Contacto agregado: '+  nombre + ' '+ apellido);
          }); 

          
      }

    return (
        <>
        <div className='contenedorFormulario'>
      <br />      
      <br />
      <form onSubmit={onSubmit} >
        <div className="mb-3">
          <label htmlFor="inputNombre" className="form-label">Nombre</label>
          <input type="text" 
                  className="form-control" id="inputNombre" 
                  value={ nombre }
                  onChange={ (e) => setNombre(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputApellido" className="form-label">Apellido</label>
          <input type="text" 
                  className="form-control" id="inputApellido" 
                  value={ apellido }
                  onChange={ (e) => setApellido(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputTelefono" className="form-label">Teléfono</label>
          <input type="text" 
                  className="form-control" id="inputTelefono" 
                  value={ telefono }
                  onChange={ (e) => setTelefono(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputCorreo" className="form-label">Correo</label>
          <input type="text" 
                  className="form-control" id="inputCorreo" 
                  value={ correo }
                  onChange={ (e) => setCorreo(e.target.value) }/>
        </div>
        
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
        </>
    );
} 