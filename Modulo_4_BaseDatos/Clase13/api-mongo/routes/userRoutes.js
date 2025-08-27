const express = require('express')
const User = require('../models/User')

// creamos un enrutador para definir nuestras rutas de usuario
const router = express.Router()

// creamos al usuario
router.post("/", async (req, res) => {
    try {
        // creamos un nuevo usuario con los datos enviados en el cuerpo de la soli
        const user = new User(req.body)
        // guardamos al usuario
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear el usuario", error })
    }
})

// obtener todos los usuarios
router.get("/", async (req, res) => {
    // buscame todos los usuarios
    const users = await User.find()
    res.json(users)
})

module.exports = router