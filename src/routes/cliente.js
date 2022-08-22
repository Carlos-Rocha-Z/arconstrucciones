const express = require("express");
const clienteSchema =require("../models/cliente");//importar o requerir el modelo de datos
const router = express.Router();//Cosntructor

// post crear cliente
router.post('/clientes', (req, res)=>{
   const cliente = clienteSchema(req.body);//crea nuevo cliente con los datos que llegan desde el cuerpo de la petición
   cliente
   .save()
   .then((data) => res.json(data))
   .catch((error)=> res.json({message: error}));
});

// get obtener todos los clientes
router.get('/clientes', (req, res)=>{
   clienteSchema
   .find()
   .then((data) => res.json(data))
   .catch((error)=> res.json({message: error}));
});

// get obtener un cliente
router.get('/clientes/:id', (req, res)=>{
   const { id } = req.params;
   clienteSchema
   .findById(id)
   .then((data) => res.json(data))
   .catch((error)=> res.json({message: error}));
});

// update actualizar un cliente
router.put('/clientes/:id', (req, res)=>{
   const { id } = req.params;
   const {nombre, numeroCedula, correo} = req.body;
   clienteSchema
   .updateOne({_id:id}, {$set:{nombre, numeroCedula, correo}})
   .then((data) => res.json(data))
   .catch((error)=> res.json({message: error}));
});

// delete eliminar un cliente
router.delete('/clientes/:id', (req, res)=>{
   const { id } = req.params;
   clienteSchema
   .remove({_id:id})
   .then((data) => res.json(data))
   .catch((error)=> res.json({message: error}));
});

module.exports = router;