const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const dataPath = path.join(__dirname, '../data/contacts.json') // la ruta del archivo json

// RUTAS

// Obtener todos los contactos
router.get('/', (req, res) => {
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) // leemos y parseamos el archivo json
    res.json(contacts)
})

// Agregar un nuevo contacto
router.post('/', (req, res) => {
    const newContact = req.body // obtenemos el nuevo contacto del cuerpo de la soli
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) // leemos y parseamos el archivo json
    contacts.push(newContact) // agregamos
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) // guardalo en un array
    res.json({ message: 'Contacto agendado', contact: newContact })
})

// Actualizar un contacto
router.put('/:id', (req, res) => {
    const { id } = req.params // obtener el id de los parametros de la url
    const updateContact = req.body // obtenemos los nuevos datos del cuerpo de la soli
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) // leemos y parseamos el archivo json
    contacts = contacts.map(contact => (contact.id === id ? updateContact : contact)) // actualizamos el contacto que corresponde
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) // guardalo en un array
    res.json({ message: 'Contacto actualizado', contact: updateContact })
})

// Eliminar un contacto
router.delete('/:id', (req, res) => {
    const { id } = req.params // obtener el id de los parametros de la url
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf8')) // leemos y parseamos el archivo json
    contacts = contacts.filter(contact => contact && contact.id !== id);
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) // guardalo en un array
    res.json({ message: 'Contacto eliminado' })
})

module.exports = router
