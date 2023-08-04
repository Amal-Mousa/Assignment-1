import express from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  compression({
    level: 6
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', router);

export default app;
