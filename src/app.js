import express from 'express';
import productRoutes from './routes/products.routes.js';
import contactosSoloRoutes from './routes/contactosSolo.routes.js';
import nivelesSoloRoutes from './routes/nivelesSolo.routes.js';
import cors from 'cors';

const app =  express();

// Permitir todas las solicitudes CORS desde http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());

app.use(productRoutes);
app.use(contactosSoloRoutes);
app.use(nivelesSoloRoutes);

export default app;