
import Categoria from '../models/Categoria'
import { type } from 'os';






const CategoriaCrear = (req, res, next) => {
    const {nombre} = req.body;
    Categoria
    .findOrCreate({where: {nombre}, defaults: {nombre}})
    .then(([resultado, created]) => {   
    // Resultado es el objeto ya creado, o el que encontró  y 
    //created es un booleano, verdadero si creó el registro nuevo
        console.log(resultado.get({plain: true}))
        if(created){
            res.json({
                message: 'Elemento creado exitosamente',
                success: true
            })
        }else{
            res.json({
                message: 'Elemento ya existente',
                success: false
            })
        }
    })
}

const CategoriaTodos = (req, res, next) => {
    Categoria.findAll({attributes: ['id', ['nombre', 'categoria']]})
    .then((resultado) => {
        res.json({
            success: true,
            elements: resultado
        })
    })
    
}

const CategoriaEliminar = (req, res, next) => {
    const {id} = req.params;
    Categoria.destroy({
        where: {
            id : id
        }
    })
    .then((RegistrosBorrados) => {
        if(RegistrosBorrados > 0){
            res.json({
                message: 'Se ha borrado exitosamente',
                success: true
            })
        }else{
            res.json({
                message: 'No existe esa categoria',
                success: false
            })
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(404).json({
            message: 'Error de servidor',
            success: false
        })
    })
}




const CategoriaBuscar = (req, res, next) => {
    const {id} = req.params
    Categoria.findAll({
        where: {
            id
        },
        attributes: ['id', ['nombre', 'categoria']]
    })
    .then((resultado) => {
        let respuesta =  JSON.stringify(resultado)
        return respuesta
    })
    .then((resultado) => res.send(resultado))
}

export {CategoriaCrear, CategoriaTodos, CategoriaEliminar, CategoriaBuscar};