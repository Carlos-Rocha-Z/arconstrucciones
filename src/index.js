const express = require('express');//montar el servidor
const mongoose = require("mongoose");//modulo para conexion DB
require("dotenv").config();//modulo para protejer la clave uri para conexion conla DB creando variables de ambiente
const clienteRoutes = require("./routes/cliente");
const vehiculoRoutes = require("./routes/vehiculo");
const vendedorRoutes = require("./routes/vendedor");
const ventaRoutes = require("./routes/venta");

const app = express(); //me retorna el objeto de la aplicación
const port = process.env.PORT || 9000; //variable de ambiente, Puerto de conexión 

//middleware
app.use(express.json());
app.use('/api', ventaRoutes);
app.use('/api', clienteRoutes);
app.use('/api', vehiculoRoutes);
app.use('/api', vendedorRoutes);


// routes
app.get('/',(req, res)=>{ //recibe objeto de la petición y el objeto de la respuesta
    res.send('Bienvenidos a mi API de venta de vehiculos');

});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)//me retorna una promesa para la conexión
.then(()=>console.log("Se realizo la conexión a MongoDB Atlas ┏(-_-)┛┗(-_-)┓┗(-_-)┛┏(-_-)┓"))
.catch(()=>console.error(error));

app.listen(port, ()=> console.log('El servidor está funcionando',port));  