import Sequelize from 'sequelize';
import db from '../database/connectDB' // Conexion
import Localidad from './Localidad'
import Categoria from './Categoria'


const Empresa = db.define('empresa',{
    /*id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },*/
    nombre:{
        type: Sequelize.STRING(50),
    },
    datoRandom:{
        type: Sequelize.STRING(50)
    }
})


Localidad.belongsTo(Empresa)






export default Empresa;
