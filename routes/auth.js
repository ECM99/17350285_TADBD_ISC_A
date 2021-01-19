const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  console.log('Se recibio una peticion en /');
  res.json({
  ok: true,
  msg: "Recibido",
});
})

// Crear  usuario, modificar o eliminar

module.exports = router;
