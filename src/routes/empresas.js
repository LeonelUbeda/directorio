/*import {Router} from 'express'
const router = Router();
*/
const router = require('express').Router();

import Empresas from '../models/Empresa'


router.get('/todos', (req, res) => {
    console.log("Todos localidad")
    Empresas.findAll()
    .then(respuesta => {
        console.log(respuesta)
        res.sendStatus(200)
    })
    .catch(err => console.log(errr));
})

router.get('/nuevo', (req, res) => {
    Empresas.create({
        nombre: "Fua chaval"
    })
    .then(respuesta => {
        console.log(respuesta)
        res.send("OK!")
    })
    .catch(error => console.log(error))
})

module.exports = router;