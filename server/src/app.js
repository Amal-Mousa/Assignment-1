import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

export default app;
