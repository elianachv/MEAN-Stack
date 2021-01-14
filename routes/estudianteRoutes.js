
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

//Insertar un nuevo estudiante
api.post('/', EstudianteController.crearEstudiante);
//Listar todos los estudiantes
api.get('/estudiantes', EstudianteController.listarEstudiantes);
//Mostrar un estudiante específico
api.get('/:idEstudiante', EstudianteController.mostrarEstudiante);
//Modificar un estudiante 
api.put('/:idEstudiante', EstudianteController.modificarEstudiante);
//Eliminar un estudiante
api.delete('/:idEstudiante', EstudianteController.eliminadrEstudiante);

module.exports = api;