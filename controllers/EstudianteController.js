const Estudiante = require('../model/Estudiante');

/**
 * @param {*} req => todos los parametros recibidos
 * @param {*} res => respuesta
 */
function crearEstudiante(req, res) {
    var user = new Estudiante();
    //formulario recibido
    var params = req.body;

    user.nombre = params.nombre;
    user.apellidos = params.apellido;
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
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario creaod con exito",
                    dataUser: userCreated
                });
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

    Estudiante.findByIdAndDelete(idEstudiante, (error, estudianteDeleted) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: "+error
            });
        } else {
            if (!estudianteDeleted) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar estudiante"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante eliminado con éxito",
                    dataUser: estudianteDeleted
                });
            }

        }
    });


}

function mostrarEstudiante(req, res){
    var idEstudiante = req.params.idEstudiante;
    Estudiante.findById(idEstudiante, (error, estudianteActual)=>{

        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: "+error
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

function listarEstudiantes(req, res){
    Estudiante.find({},(error, allUsers) => {

        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor: "+error
            });
        } else {
            if (!allUsers) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al mostrar ESTUDIANTES"
                });
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiantes mostrados con éxito",
                    allUser: allUsers
                });
            }

        }

    });
}

module.exports = {
    crearEstudiante,
    modificarEstudiante,
    eliminadrEstudiante,
    mostrarEstudiante,
    listarEstudiantes
}