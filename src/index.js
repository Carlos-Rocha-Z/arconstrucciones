const express = require('express');//montar el servidor
const mongoose = require("mongoose");//modulo para conexion DB
require("dotenv").config();//modulo para protejer la clave uri para conexion conla DB creando variables de ambiente
const userRoutes = require("./routes/user");

const app = express(); //me retorna el objeto de la aplicación
const port = process.env.PORT || 9000; //variable de ambiente, Puerto de conexión 

//middleware
app.use(express.json());
app.use('/api',userRoutes);

// routes
app.get('/',(req, res)=>{ //recibe objeto de la petición y el objeto de la respuesta
    res.send('Welcome to my API');

});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)//me retorna una promesa para la conexión
.then(()=>console.log("Se realizo la conexión a MongoDB Atlas ┏(-_-)┛┗(-_-)┓┗(-_-)┛┏(-_-)┓"))
.catch(()=>console.error(error));

app.listen(port, ()=> console.log('El servidor está funcionando',port));  