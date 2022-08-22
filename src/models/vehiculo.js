const { Schema, model }  = require("mongoose");

//Esquema del vehiculo
const vehiculoSchema = Schema({
    marca:{
        type:String,
        require: true
    },
    precio:{
        type:Number,
        require: true,
    },
    referencia:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    },
    imagen:{
        type:String,
        require:true
    }

});
module.exports = model('Vehiculo', vehiculoSchema);//exportar modulo