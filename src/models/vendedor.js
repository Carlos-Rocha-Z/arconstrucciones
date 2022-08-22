const { Schema, model } = require("mongoose");

//Esquema del vendedor
const vendedorSchema= Schema({
    nombre:{
        type: String,
        require: true,   
    },
    numeroCedula:{
        type:Number,
        require: true,
    },
    correo:{
        type:String,
        require: true
    }
});

module.exports= model('Vendedor',vendedorSchema)//exportar modulo