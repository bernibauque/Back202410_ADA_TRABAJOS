// importamos mongoose
const mongoose = require("mongoose")

// importamos dotenv
require('dotenv').config()

// funcion asincrona que establece la conexion con la BD
const connectDB = async () => {
    try {
        // intentamos establecer la conexion con el metodo connect
        await mongoose.connect(process.env.MONGO_URI, {
            // indicamos que se debe utilizar el nuevo sistema de analisis
            useNewUrlParser: true,
            // indicamos la administracion de mongo
            useUnifiedTopology: true
        })

        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Hubo un error de conexion", error);
        process.exit(1)
    }
}

module.exports = connectDB