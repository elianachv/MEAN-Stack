/*Tendrá toda la lógica de express - Es el controlador*/
const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const routes = require('./routes/estudianteRoutes');
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes);


/* Se exporta para usarla en el archivo index */
module.exports = app;