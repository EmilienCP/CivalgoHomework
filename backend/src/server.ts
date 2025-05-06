import express from 'express';
import cors from 'cors';
import employesRoutes from './routes/employesRoutes';

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/', employesRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${port}`);
});