import express from 'express';
import conn from "./conexion.js";
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/mostrarListado',function(req,res){
    conn.query('SELECT * FROM contacto;', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');

            res.send(results)
            console.log('Done.');
        })
});

app.post('/buscarContacto',function(req,res){
    let nombres = req.body.Name;
    let nombre = "%" + nombres + "%"
    console.log(nombre)
    conn.query('SELECT * FROM contacto WHERE nombre LIKE ?;',[nombre],
    function(err,results,fields){
        if(err) throw err;
        else console.log('Selected '+results.length+' row(s).');

        res.send(results)
        console.log('Done.');
    })
});

app.get('/mostrarListadoFavoritos',function(req,res){
    conn.query('SELECT * FROM contacto WHERE favorito = 1;', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');

            res.send(results)
            console.log('Done.');
        })
});

app.post('/agregarContacto',function(req,res){
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let correo = req.body.correo;
    let favorito = req.body.favorito;

    conn.query('INSERT INTO contacto(nombre, apellido,telefono, correo, favorito) VALUES(?,?,?,?,?);', [nombre,apellido,telefono,correo,favorito],
        function (err, results, fields) {
        if (err){
            console.log(err)
            return res.send({ "agregado": false })
        }
        else{
            console.log('Se agregó ' + results.affectedRows + ' contacto(s).');
             return res.send({ "agregado": true })
        }
        })

});

app.post('/obtenerContacto',function(req,res){
    console.log(req.body.idContacto)
    let idContacto = req.body.idContacto;
    conn.query('SELECT * FROM contacto WHERE idContacto = ?;', [idContacto], 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');

            res.send(results)
            console.log('Done.');
        })
});

app.post('/modificarContacto',function(req,res){
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let correo = req.body.correo;
    let favorito = req.body.favorito;
    let idContacto = req.body.idContacto;

    conn.query('UPDATE contacto SET nombre = ?, apellido = ?, telefono = ?, correo = ?, favorito = ? WHERE idContacto = ?;', [nombre,apellido,telefono,correo,favorito,idContacto],
    function (err, results, fields) {
        if (err){
            console.log(err)
            return res.send({ "actualizado": false })
        }
        else{
             console.log('Se actualiza ' + results.affectedRows + ' contacto(s).');
             return res.send({ "actualizado": true })
        }
   });
});

app.post('/eliminarContacto',function(req,res){
    let idContacto =req.body.idContacto;

    conn.query('DELETE FROM contacto WHERE idContacto = ?;', [idContacto], 
    function (err, results, fields) {
        if (err){
            console.log(err)
            return res.send({ "eliminado": false })
        }
        else{
             console.log('Eliminado ' + results.affectedRows + ' contacto(s).');
             return res.send({ "eliminado": true })
        }
   });
});

app.post('/agregarFavorito',function(req,res){
    let idContacto =req.body.idContacto;

    conn.query('UPDATE contacto SET favorito = 1 WHERE idContacto = ?;', [idContacto], 
    function (err, results, fields) {
        if (err){
            console.log(err)
            return res.send({ "agregaFavorito": false })
        }
        else{
             console.log('agregaFavorito ' + results.affectedRows + ' contacto(s).');
             return res.send({ "agregaFavorito": true })
        }
   });
});

app.post('/eliminarFavorito',function(req,res){
    let idContacto =req.body.idContacto;

    conn.query('UPDATE contacto SET favorito = 0 WHERE idContacto = ?;', [idContacto], 
    function (err, results, fields) {
        if (err){
            console.log(err)
            return res.send({ "eliminaFavorito": false })
        }
        else{
             console.log('eliminaFavorito ' + results.affectedRows + ' contacto(s).');
             return res.send({ "eliminaFavorito": true })
        }
   });
});

app.listen(4000);
console.log("Server running on port 4000");