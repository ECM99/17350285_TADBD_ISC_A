//console.log("Hola Mundo!! ECM99");

const express = require('express');
require('dotenv').config();

//CREADNO ERVIDOR EXPRESS
const app = express();

//console.log(process.env);

//RUTA
/*app.get('/', (req, res) => {
  console.log('Se recibio una peticion en /');
  res.json({
  ok: true,
  msg: "Recibido",
});
})*/

//Aceso al directorio publico
app.use(express.static('public'));

//TODO: Información de usuario paraautorizaciones

app.use('/api/auth', require('./routes/auth'));

//Configuracion del ouerto
app.listen(process.env.PORT, () => {
  console.log('Backend corriendo en el puerto', process.env.PORT);
});
