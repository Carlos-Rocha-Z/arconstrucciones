const express = require("express");
const vehiculoSchema = require("../models/vehiculo"); //importar o requerir el modelo de datos
const router = express.Router();//Cosntructor

// post crear vehiculo
router.post("/vehiculos", (req, res)=>{
   const vehiculo = vehiculoSchema(req.body);
   vehiculo
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}) );
});
// get obtener vehiculos
router.get("/vehiculos", (req, res)=>{
    vehiculoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});
// get obtener un vendedor
router.get("/vehiculos/:id", (req, res)=>{
    const{id} = req.params;
    vehiculoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});
// update actualizar un vendedor
router.put("/vehiculos/:id",(req, res)=>{
    const{id} = req.params;
    const{marca, precio, referencia, cantidad, imagen} = req.body;
    vehiculoSchema
    .updateOne({_id:id}, {$set:{marca, precio, referencia, cantidad, imagen}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete eliminar un vendedor
router.delete("/vehiculos/:id", (req,res)=>{
    const{id} = req.params;
    vehiculoSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
});


module.exports =router;
