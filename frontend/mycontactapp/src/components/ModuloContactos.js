import React from 'react';
import { NuevoContacto } from './NuevoContacto';
import { useState } from 'react';
import { ListaContactosModificar } from './ListaContactosModificar';
import { ListaContactos } from './ListaContactos';
import { ListaFavoritos } from './ListaFavoritos';
import { ModificarContacto } from './ModificarContacto';
import { BuscarContacto } from './BuscarContacto';

export const ModuloContactos = (props) => {
    // props.tipo = 0 -> listado de todos los contactos
    // props.tipo = 1 -> listado de favoritos
    // props.tipo = 2 -> formulario para agregar nuevo contacto 
    

    const formNuevoContacto = () => {  
        return (
            <NuevoContacto/>
       );
    }
    //const url = props.tipo == 0 ? 'http://localhost:4000/mostrarListado': 'http://localhost:4000/mostrarListadoFavoritos'; 
    
    if(props.tipo === 0){      
        return <ListaContactos tipo = {0}/>;
      }else if(props.tipo === 1){
        return <ListaFavoritos tipo = {1}/>;
      }else if(props.tipo === 2){
        return formNuevoContacto();
      }else if(props.tipo === 3){
        return <ListaContactosModificar tipo = {0}/>;
      } else if(props.tipo == 4){
       return <BuscarContacto/>;
      }else return <>else</>;

}