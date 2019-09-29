import express, { json } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

//Importando conexion con la base de datos
import db from './database/connectDB'


// Importando Rutas
import CategoriaRouter from './routes/categorias'
import EmpresaRouter from './routes/empresas'

// Middlewares

app.use(morgan('dev'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




app.use(cors())
// Rutas
app.use('/api/categoria', CategoriaRouter);
app.use('/api/empresa', EmpresaRouter);
//app.use('/api/localidad', require('./routes/localidades'));


db.authenticate().then(() => {
    console.log("Conectado a la base de datos")
})
.catch(err => console.log(err))



export default app;