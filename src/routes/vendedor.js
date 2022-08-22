const express = require("express");
const vendedorSchema = require("../models/vendedor");//importar o requerir el modelo de datos
const router = express.Router();//Cosntructor

// post crear vendedor
router.post("/vendedores", (req, res)=>{
    const vendedor = vendedorSchema(req.body);
    vendedor
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// get obtener todos los vendedores
router.get("/vendedores", (req, res)=>{
    vendedorSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
})
// get obtener un vendedor
router.get("/vendedores/:id", (req, res)=>{
    const {id}= req.params;
    vendedorSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

// update actualizar un vendedor
router.put("/vendedores/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, numeroCedula, correo} = req.body;
    vendedorSchema
    .updateOne({_id:id},{$set:{nombre, numeroCedula, correo}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
// delete eliminar un vendedor
router.delete("/vendedores/:id", (req, res)=>{
    const {id} = req.params;
    vendedorSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

module.exports = router;