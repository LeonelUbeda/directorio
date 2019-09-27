import Sequelize from 'sequelize';
import { sequelize } from '../database/connectDB' // Conexion
//import Localidad from './Localidad'



const Empresa = sequelize.define('empresa',{
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

const Localidad = sequelize.define('localidad', {
    /*empresaId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'empresa',
            key: 'id'
        }
    }*/
    direccion: {
        type: Sequelize.INTEGER
    }
})

const Usuario = sequelize.define('usuario', {
    nombre:{
        type: Sequelize.STRING(50)
    }
})

const Proyecto = sequelize.define('proyecto', { 
    titulo: {
        type: Sequelize.STRING(50)
    }
})

const UsuarioProyecto = sequelize.define('usuario_proyecto',{
    rol: {
        type: Sequelize.STRING(50)
    }
})

Proyecto.belongsToMany(Usuario, {through: UsuarioProyecto})


//Empresa.belongsToMany(Localidad, {through : })
//Empresa.hasMany(Localidad)
//Localidad.belongsTo(Empresa)
sequelize.sync({force: true});
//export default Empresa;
/*

var Father = sequelize.define('Father', {

        age: Sequelize.STRING,
        //The magic start here
        personId: {
              type: Sequelize.INTEGER,
              references: 'persons', // <<< Note, its table's name, not object name
              referencesKey: 'id' // <<< Note, its a column name
        }
});

Person.hasMany(Father); // Set one to many relationship

*/

/*


create table if not exists empresa(
	id int primary key auto_increment,
    ID_categoria int not null,
    nombre varchar(30) not null,
    constraint FK_CAT 
		foreign key (id) 
			references categoria(ID_categoria)
);

*/