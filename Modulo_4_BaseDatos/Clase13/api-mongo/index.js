const express = require('express')
const connectDB = require('./database')
require("dotenv").config()

// RUTAS QUE IMPORTAMOS 
const userRoutes = require("./routes/userRoutes")
const app = express()
app.use(express.json())
app.use("/api/usuarios", userRoutes)

const PORT = process.env.PORT || 3000

connectDB()

// ruta para leer JSON
app.get("/", (req, res) => {
    res.send("API funcionando")
})

// iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})

