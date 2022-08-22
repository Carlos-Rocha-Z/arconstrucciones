const { Schema, model } = require("mongoose");

//Esquema de venta

/* const ventaSchema = Schema({
    fecha:{
        type: String,
        require:true,
    },
    cliente:{
        type: String,
        require: true,
    },
     vehiculo:{
        type: String,
        require:true,
        },
    vendedor:{
        type: String,
        require:true
    }
        
}); */
const ventaSchema = Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    productos:[{
        vehiculo:{
            type: Schema.Types.ObjectId,
            ref:'Vehiculo'
        }
    }],

    vendedor:{
        type: Schema.Types.ObjectId,
        ref:'Vendedor'
    }
        
});

module.exports = model('Venta', ventaSchema)//exportar modulo