import {Router} from 'express'
const router = Router();

//Modelo Categoria
import Categoria from '../models/Categoria'

//Controladores
import {CategoriaCrear, CategoriaTodos, CategoriaEliminar, CategoriaBuscar} from '../controllers/categorias.controller'



//Rutas

router.get('/', CategoriaTodos);
router.post('/' , CategoriaCrear);
router.delete('/:id', CategoriaEliminar)
router.get('/:id', CategoriaBuscar)


export default router;