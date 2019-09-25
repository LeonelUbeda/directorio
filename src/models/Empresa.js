import Sequelize from 'sequelize';
import { sequelize } from '../database/database' // Conexion




const Empresa = sequelize.define('empresa',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING(50)
    }
})


Empresa.sync({force: true});



export default Empresa;

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