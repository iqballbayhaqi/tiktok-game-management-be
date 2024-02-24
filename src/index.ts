import express from 'express';
import router from './routes';

const app = express();
const PORT = 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  
})