const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const serviceController = require('./controllers/servicio.controller')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const port = process.env.PORT || 9999

const conexionDB = () => {
    try {
        const URI = process.env.MONGODB_URI
        mongoose.connect(URI)
    } catch (err) {
        console.log(err);
    }
}

conexionDB()

app.get('/servicios', serviceController.findService)

app.get('/servicios/:id', serviceController.findServiceOne)

app.post('servicios', serviceController.addService)

app.put('servicios/:id', serviceController.putService)

app.delete('/servicios/:id', serviceController.deleteServiceOne)

app.listen(port, () => {
    console.log(`Estas escuchando http://localhost:${port}`);
})