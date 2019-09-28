import Sequelize from 'sequelize';
import db from '../database/connectDB' // Conexion
import Categoria from './Categoria'
import Empresa from './Empresa'

const EmpresaCategoria = db.define('empresa_categoria', {
})




Empresa.belongsToMany(Categoria, {through: EmpresaCategoria})


export default EmpresaCategoria;