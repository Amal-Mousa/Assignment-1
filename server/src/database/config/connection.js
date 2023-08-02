import pg from 'pg';
import {} from 'dotenv/config';

const { NODE_ENV, DEV_DB_URL, DB_URL } = process.env;

let DB = '';

if (NODE_ENV === 'development') {
  DB = DEV_DB_URL;
} else {
  DB === DB_URL;
}

const options = {
  connectionString: DB,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

const connection = new pg.Pool(options);

export default connection;
