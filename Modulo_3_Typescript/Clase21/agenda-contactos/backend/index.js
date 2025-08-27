const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const contactsRoutes = require('./routes/contacts')

const app = express()
const PORT = 3000

// middleware
app.use(cors())
app.use(express.json())

// usar los archivos del front
app.use(express.static(path.join(__dirname, '../public')))

// rutas api
app.use('/api/contacts', contactsRoutes)

// ruta para manejar cualquir soli
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// iniciamos servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}`);
})


