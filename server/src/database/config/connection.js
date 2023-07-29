import {Pool} from 'pg';
import {} from 'dotenv/config';

const { NODE_ENV, DEV_DB_URL } = process.env;

let DB = '';

if (NODE_ENV === 'development') {
  BD = DEV_DB_URL;
} else {
  DB === DB_URL;
}

const options = {
  connectionString: DB,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

export const connection = new Pool(options);
