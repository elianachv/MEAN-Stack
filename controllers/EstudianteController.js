const Estudiante = require('../model/Estudiante');

/**
 * @param {*} req => todos los parametros recibidos
 * @param {*} res => respuesta
 */
function crearEstudiante(req, res) {
    console.log('Alcanzo a llegar a la creacion');
    var user = new Estudiante();
    //formulario recibido
    var params = req.body;
    // console.log('Esto es lo que se recibio: ' + req.body.nombre);


    user.nombre = params.nombre;
    user.apellidos = params.apellidos;
    user.edad = params.edad;
    user.direccion = params.direccion;
    user.correo = params.correo;
    user.telefono = params.telefono;


    //insert de moongoose
    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en servidor"
            });
            console.log('Error total: ' + error.message);

        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"

                });
                console.log('No se pudo crear el usuario');

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario creado con exito",
                    dataUser: userCreated
                });
                console.log('Creacion de usuario exitosa');
            }

        }
    })
}

function modificarEstudiante(req, res) {
    //formulario recibido
    var parametros = req.body;
    var idEstudiante = req.params.idEstudiante;

    Estudiante.findByIdAndUpdate(idEstudiante, parametros, (error, estudianteUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            });
        } else {
            if (!estudianteUpdated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al modificar estudiante"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante modificado con éxito",
                    dataUser: estudianteUpdated
                });
            }

        }
    });


}

function eliminadrEstudiante(req, res) {
    //formulario recibido
    //var parametros = req.body;
    var idEstudiante = req.params.idEstudiante;
    console.log('Procesando eliminación');
    Estudiante.findByIdAndDelete(idEstudiante, (error, estudianteDeleted) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: " + error
            });
            console.log('Erro 500');

        } else {
            if (!estudianteDeleted) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar estudiante"
                });
                console.log('Erro 400');

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante eliminado con éxito",
                    dataUser: estudianteDeleted
                });
                console.log('Elimancion exitos de: '+estudianteDeleted);

            }

        }
    });


}

function mostrarEstudiante(req, res) {
    var idEstudiante = req.params.idEstudiante;
    Estudiante.findById(idEstudiante, (error, estudianteActual) => {

        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: " + error
            });
        } else {
            if (!estudianteActual) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al mostrar ESTUDIANTES"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante mostrado con éxito",
                    dataUser: estudianteActual
                });
            }

        }

    })
}

function buscarApellido(req, res) {
    var apellidos = req.params.apellidos;

    Estudiante.find({ 'apellidos': apellidos }, (error, estudiantes) => {

        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: " + error
            });
        } else {
            if (!estudiantes) {
                res.status(400).send({
                    statusCode: 400,
                    message: "No se encontro ningun estudiante con esos apellidos"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiantes mostrados con éxito",
                    estudiantes: estudiantes
                });
            }

        }

    });
}

function listarEstudiantes(req, res) {
    console.log('Alcanzo el listado de estudiantes');
    Estudiante.find({}, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: " + error
            });
            console.log('Error 500');

        } else {
            if (!allUsers) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al mostrar ESTUDIANTES"
                });
                console.log('Error 400');

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiantes mostrados con éxito",
                    allUser: allUsers
                });
                console.log('Todo bien: ' + allUsers);

            }

        }

    });
}

module.exports = {
    crearEstudiante,
    modificarEstudiante,
    eliminadrEstudiante,
    mostrarEstudiante,
    listarEstudiantes,
    buscarApellido
}