import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import votto from './server/votto.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/votto', votto);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`VOTTO backend: http://localhost:${PORT}`);
});