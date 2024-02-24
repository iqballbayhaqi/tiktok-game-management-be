import express from 'express';
import { PrismaClient } from '@prisma/client';
import router from './routes';

const app = express();
const PORT = 5000;
const prisma = new PrismaClient();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  
})