import React from 'react';
import './style.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { ListaContactos } from './ListaContactos';
export const BuscarContacto = (props) =>{
    const url = 'http://localhost:4000/buscarContacto'
    
    const [datosAPI, setDatosAPI] = useState([]);

    React.useEffect(
        ()=>{
            axios.get(url).then((response) =>{
                setDatosAPI(response.data);
            });
        },[]);
        
        function charge(item){
            console.log(item);
            axios.get(url).then((response) =>{
                setDatosAPI(response.data);
            });
        }

    return (
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
        
    );
}
