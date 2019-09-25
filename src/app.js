import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

//Importing Routes
import localidadRoutes from './routes/localidades'
import db from './database/database'

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/empresa', require('./routes/empresas'));
//app.use('/api/localidad', require('./routes/localidades'));


db.authenticate().then(() => {
    console.log("FUA")
})
.catch(err => console.log(err))



export default app;