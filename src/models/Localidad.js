import Sequelize from 'sequelize';
import db from '../database/connectDB' // Conexion


const Localidad = db.define('localidad', {
    /*empresaId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'empresa',
            key: 'id'
        }
    }*/
    direccion: {
        type: Sequelize.STRING(50)
    }
})


export default Localidad;