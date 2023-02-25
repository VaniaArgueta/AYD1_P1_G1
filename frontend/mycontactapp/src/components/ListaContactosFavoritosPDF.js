import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';
import axios from "axios";

export const MyDocumentFAV  = (props) => {
    const url = 'http://localhost:4000/mostrarListadoFavoritos';

    const [datosAPI, setDatosAPI] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
        setDatosAPI(response.data);
        });
    }, []);

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E1EDE0'
        },
        section: {
          margin: 30,
          padding: 10,
          flexGrow: 1
        },
        viewer: {
          width: 1000, //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        }
      });      

      return (
        <Document>
            <Page size="letter" style={styles.page}>
            <View style={styles.section}>
                <Text>CONTACTOS FAVORITOS</Text>
                <Text>Práctica No. 1 - Laboratorio AyDS1 Grupo 1</Text>
            {
            datosAPI.map((item, index) => {
                return (
                <div key={index} item={item}>
                    <Text>
                    {`\n${index} - Nombre: ${item.nombre} ${item.apellido} 
                    \nTeléfono: ${item.telefono} Correo: ${item.correo}\n\n`}
                    </Text>
                </div>
                )
            })
            }
            </View>
            </Page>
        </Document>
      );

}