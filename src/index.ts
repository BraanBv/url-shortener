import express, { Application, Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log('Server up!');
  console.log(`Port: ${PORT}`);
});