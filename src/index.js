/*
import app from './app.js'

app.listen(3000)
console.log('Servidor iniciado')
*/

import express from 'express';
import productRoutes from './routes/products.routes.js';
import contactosSoloRoutes from './routes/contactosSolo.routes.js';
import nivelesSoloRoutes from './routes/nivelesSolo.routes.js';
import cors from 'cors';

const app =  express();

const port = process.env.PORT || 3000;

// Permitir todas las solicitudes CORS desde http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

app.get("/", (req, res) => {
    const htmlResponse = `
    <html>
        <head>
            <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
            <h1>Soy un proyecto en Vercel</h1>
        </body>
    </html>
    `;
    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`port runinig in http://localhost:${port}`);
});

app.use(express.json());

app.use(productRoutes);
app.use(contactosSoloRoutes);
app.use(nivelesSoloRoutes);

export default app;