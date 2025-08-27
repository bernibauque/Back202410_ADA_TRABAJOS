const API_URL = '/api/contacts' //url base para las soli

const form = document.getElementById('contact-form') // formulario para agregar contactos
const contactTable = document.getElementById('contacts-table') // tabla donde se muestran los contactos

//funcion para obtener los contacto desde el back
async function fetchContacts() {
    const res = await fetch(API_URL) // realizo una soli get al back
    const contacts = await res.json() // convierte la respuesta en un array de contactos
    renderContacts(contacts) // muestra los contactos de la table
}

// renderizamos los contactos de la tabla
function renderContacts(contacts) {
    contactTable.innerHTML = contacts.map(contact => `
        <tr>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
            <button class="delete-btn" onclick="deleteContact('${contact.id}')>Eliminar</button>
            </td>
        </tr>
    `).join('')
}

// manejo del evento de enviar el formulario para agregar el contacto
form.addEventListener('submit', async (e) => {
    e.preventDefault() // evitar que la pag se recargue
    const name = document.getElementById('name').value
    const email = document.getElementById('email').ariaValueMax
    const phone = document.getElementById('phone').value

    //enviar una soli post al backend con el nuevo contacto
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ id: Date.now().toString(), name, email, phone })
    })
    form.reset() //limpiar el form
    fetchContacts() // actualizar la tabla de contactos
})

// eliminar un contacto 
async function deleteContact(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' }) //Realiza una soli delete al backend
    fetchContacts() // actualizar la tabla de contactos
}

fetchContacts()