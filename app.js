// Express
const express = require('express');
const app = express();

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");


var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
});

/*********************** Mongoose Configuration *******************************/
require('./models/Usuario');
require('./models/Mascota');
require('./config/passport');
//Configurando las rutas
app.use('/v1', require('./routes'));

// Iniciando el servidor
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})