import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

//Importing Routes
import empresaRoutes from './routes/empresas'
import localidadRoutes from './routes/localidades'


// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/empresa',empresaRoutes);
app.use('/api/localidad',localidadRoutes);


export default app;