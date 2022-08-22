const { Schema, model }  = require("mongoose");

//Esquema del cliente
const clienteSchema = Schema({
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


module.exports = model('Cliente', clienteSchema);//exportar modulo