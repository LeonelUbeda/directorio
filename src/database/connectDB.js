import Sequelize from 'sequelize';
import mysql from 'mysql2'

/* Configuracion */
const host = 'localhost'
const user = 'root'
const password = 'admin'
const database = 'directorio'

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password
});

connection.query('create database if not exists ' + database,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

export const sequelize = new Sequelize('directorio', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        required: 30000,
        idle: 10000
    },
    define: {
      freezeTableName: true, // Evitar que añada la 'S' al final de cada nombre de las tablas
    },
    loggin: false
})


export default sequelize;