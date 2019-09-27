import {Router} from 'express'
const router = Router();
import Categoria from '../models/Categoria'


router.post('/nuevo', (req, res) => {
    const {nombre} = req.body

        Categoria
        .findOrCreate({where: {nombre}, defaults: {nombre}})
        .then(([resultado, created]) => {   
        // Resultado es el objeto ya creado, o el que encontró  y 
        //created es un booleano, verdadero si creó el registro nuevo
          console.log(resultado.get({plain: true}))
          if(created){
            res.send("Elemento creado")
          }else{
            res.send("Elemento ya existente")
          }
        })
})


module.exports = router;