import express from 'express';
import productRoutes from './routes/products.routes.js';
import contactosSoloRoutes from './routes/contactosSolo.routes.js';
import nivelesSoloRoutes from './routes/nivelesSolo.routes.js';
import EstadosDeSaludRoutes from './routes/estadoDeSalud.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import medicionRoutes from './routes/medicion.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app =  express();

// Para que express pueda leer JSON
app.use(bodyParser.json());


// Permitir todas las solicitudes CORS desde http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());

app.use(productRoutes);
app.use(contactosSoloRoutes);
app.use(nivelesSoloRoutes);
app.use(EstadosDeSaludRoutes);
app.use(usuariosRoutes);
app.use(medicionRoutes);

export default app;
