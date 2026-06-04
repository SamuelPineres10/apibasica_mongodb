const mongoose = require('mongoose');

const servicioPeluqueriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  duracionMinutos: { type: Number, required: true },
  precio: { type: Number, required: true },
  categoria: { 
    type: String, 
    enum: ['corte', 'tintura', 'peinado', 'tratamiento', 'barberia', 'otros'],
    required: true},
  activo: {
    type: Boolean,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },


  },
    {versionKey:false});

module.exports = mongoose.model('Servicio', servicioPeluqueriaSchema);
