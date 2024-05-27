import express from 'express';
import productRoutes from './routes/products.routes.js';
import contactosSoloRoutes from './routes/contactosSolo.routes.js';

const app =  express();

app.use(express.json());

app.use(productRoutes);
app.use(contactosSoloRoutes);

export default app;