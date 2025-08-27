const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/vehicles.json')

const vehicleModel = {

    readVehicles: () => {
        const data = fs.readFileSync(filePath)
        return JSON.parse(data)
    },

    writeVehicles: (vehicles) => {
        const jsonData = JSON.stringify(vehicles, null, 2)
        fs.writeFileSync(filePath, jsonData)
    }
}

module.exports = vehicleModel;