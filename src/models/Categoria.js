import Sequelize from 'sequelize';
import db from '../database/connectDB' // Conexion



const Categoria = db.define('categoria',{
    nombre: {
        type: Sequelize.STRING(50)
    }
})



export default Categoria;
