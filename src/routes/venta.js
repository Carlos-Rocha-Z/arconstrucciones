const express = require("express");
const ventaSchema = require("../models/venta");//importar o requerir el modelo de datos
const router = express.Router();//Cosntructor

// post crear ventas
router.post("/ventas", (req, res)=>{
    const venta = ventaSchema(req.body);
    venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// get obtener todas las ventas
router.get("/ventas", (req, res)=>{
    ventaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//get obtener una venta por id
router.get("/ventas/:id",(req, res)=>{
    const {id}= req.params;
    ventaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//put actualizar una venta por id
router.put("/ventas/:id",(req, res)=>{
    const{id} = req.params;
    const{fecha, cliente, vehiculo, vendedor } = req.body;
    ventaSchema
    .updateOne({_id:id}, {$set:{fecha, cliente, vehiculo, vendedor}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
// delete eliminar un vendedor
router.delete("/ventas/:id", (req, res)=>{
    const{id} = req.params;
    ventaSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports = router;