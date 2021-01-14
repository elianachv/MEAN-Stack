/*Tendrá toda la lógica de express - Es el controlador*/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/estudianteRoutes');
const app = express();

app.use(bodyParser.json())
app.use('/api', routes);

/* Se exporta para usarla en el archivo index */
module.exports = app;