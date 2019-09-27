import express, { json } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
const app = express();

import db from './database/connectDB'


// Middlewares

app.use(morgan('dev'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes

app.use('/api/empresa', require('./routes/empresas'));
app.use('/api/categoria', require('./routes/categorias'));



//app.use('/api/localidad', require('./routes/localidades'));



db.authenticate().then(() => {
    console.log("Conectado a la base de datos")
})
.catch(err => console.log(err))



export default app;