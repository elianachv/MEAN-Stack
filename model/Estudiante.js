const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    direccion: String,
    correo: String,
    telefono: Number
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);