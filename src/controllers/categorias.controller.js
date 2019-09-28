
import Categoria from '../models/Categoria'

const CategoriaCrear = (req, res, next) => {
    const {nombre} = req.body;
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
}

const CategoriaTodos = (req, res, next) => {
    Categoria.findAll({attributes: ['id', ['nombre', 'categoria']]})
    .then((resultado) => {
        let respuesta =  JSON.stringify(resultado)
        return respuesta
    })
    .then((resultado) => res.send(resultado))
}



export {CategoriaCrear, CategoriaTodos};