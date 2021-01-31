
const express = require('express');
const api = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

/*
POST: Para insertar datos y enviar datos sensibles
GET: Obtener datos 
PUT: Modificar información
DELETE: Eliminar información 

Ruta de prueba
api.get('/saludar', (rel, rest)=>{
    console.log("Llegaron a la ruta saludar");
});

*/

/*
api.use((req, res, next) => {
    console.log('Se estan configurando las cabeceras ... ');
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", 'true');
    //res.header('Access-Control-Allow-Credentials', 'true');
    next(); // Important
});
*/


//Insertar un nuevo estudiante
api.post('/crear', EstudianteController.crearEstudiante);
//Listar todos los estudiantes
api.get('/estudiantes', EstudianteController.listarEstudiantes);
//Listar estudiantes filtrados por apellido
api.get('/estudiantes/:apellidos', EstudianteController.buscarApellido);
//Mostrar un estudiante específico
api.get('/:idEstudiante', EstudianteController.mostrarEstudiante);
//Modificar un estudiante 
api.put('/actualizar/:idEstudiante', EstudianteController.modificarEstudiante);
//Eliminar un estudiante
api.delete('/eliminar/:idEstudiante', EstudianteController.eliminadrEstudiante);



module.exports = api;