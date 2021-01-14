/*
Conexión entre la api y mongo. 
Este documento inicializa la aplicació y redirige a la primera ruta.
*/

//libreria para conectarse con mongo
const mongoose = require('mongoose');
//Puerto en donde se levanta el servidor Express
const port = 3000;
//Carga el controlador principal de la aplicación 
const app = require('./app')

//Conexión entre la API y mongo
mongoose.connect('mongodb://localhost:27017/eduBIT', {useNewUrlParser:true, useUnifiedTopology:true} , (error , res)=> {
    if (error) {
        console.log("Error de conexión ",error);
    } else{
        console.log("Conexión exitosa");
        app.listen(port, ()=>{
            console.log('Escuchando en el puerto ' + port);
        })
    }
})