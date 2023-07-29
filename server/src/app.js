import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

export default app;
