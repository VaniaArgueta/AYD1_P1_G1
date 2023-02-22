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
        .post(url, {
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
          correo: correo,
          favorito: 0  // Por defecto, el contacto no será favorito   
        })
        .then((response) => {
          console.log(response.data);
          alert('Contacto agregado: ' + nombre + ' ' + apellido);
        });

        setNombre('');
        setApellido('');
        setTelefono('');
        setCorreo('');
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form" id='formNuevoContacto'>
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
      </form>
    </>
  );
} 