import {Router} from 'express'
const router = Router();


import Empresas from '../models/Empresa'
import EmpresaCategoria from '../models/EmpresaCategoria'
import Categoria from '../models/Categoria'



router.get('/todos', (req, res) => {
    console.log("Todos localidad")
    Empresas.findAll()
    .then(respuesta => {
        console.log(respuesta)
        res.sendStatus(200)
    })
    .catch(err => console.log(errr));
})




router.post('/nuevo', (req, res) => {
    /*Empresas.create({
        nombre: "Fua chaval"
    })
    .then(respuesta => {
        console.log(respuesta)
        res.send("OK!")
    })
    .catch(error => console.log(error))*/
    console.log("hola" ,req.body)
    res.send("Ok")
})



module.exports = router;