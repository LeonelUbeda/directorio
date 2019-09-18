import Sequelize from 'sequelize';


export const sequelize = new Sequelize('directorio', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        required: 30000,
        idle: 10000
    },
    loggin: false
})



