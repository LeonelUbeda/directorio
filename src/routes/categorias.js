import {Router} from 'express'
const router = Router();

//Modelo Categoria
import Categoria from '../models/Categoria'

//Controladores
import {CategoriaCrear, CategoriaTodos} from '../controllers/categorias.controller'



//Rutas

router.post('/nuevo' , CategoriaCrear);
router.get('/todos', CategoriaTodos);



export default router;