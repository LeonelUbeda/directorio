
import db from './connectDB'
import Categoria from '../models/Categoria'
import Empresa from '../models/Empresa'
import EmpresaCategoria from '../models/EmpresaCategoria'
import Localidad from '../models/Localidad'


db.sync({force: true})
.then(() => console.log("Sincronizando"))
.then(() => {process.exit()})

