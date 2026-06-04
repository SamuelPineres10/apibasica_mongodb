const modeloPeluqueria = require('../models/peluqueria.model');




exports.findService = async (req,res)=> { 
  try {
    const servicio = await modeloPeluqueria.find();
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.findServiceOne = async (req, res) => {
    try{
        const servicio = await modeloPeluqueria.find({nombre:req.params.id})
        res.json(servicio)

    } catch (err) {
        res.status(500).json({ err: err.message});

    }
}


exports.addService = async (req, res) => {
    try{
        let newService = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            duracionMinutos: parseInt(req.body.duracionMinutos),
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            activo: req.body.activo,
            imagen: req.body.imagen
        }

        const servicio = await modeloPeluqueria.insertOne(newService)
        res.json(newService)

    } catch (err) {
        res.status(500).json({ err: err.message});

    }
}

exports.putService = async (req, res) => {
    try{
        let newService = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            duracionMinutos: parseInt(req.body.duracionMinutos),
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            activo: req.body.activo,
            imagen: req.body.imagen
        }

        const servicio = await modeloPeluqueria.updateOne(
            {nombre: req.params.id},
            {$set: newService}
        )
        res.json(newService)

    } catch (err) {
        res.status(500).json({ err: err.message});

    }
}

exports.deleteServiceOne = async (req, res) => {
    try{
        const servicio = await modeloPeluqueria.deleteOne({nombre:req.params.id})
        res.json(servicio)

    } catch (err) {
        res.status(500).json({ err: err.message});

    }
}




