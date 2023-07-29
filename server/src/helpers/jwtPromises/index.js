import { verify, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET_KEY } = process.env;

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });

const signToken = (payload) =>
  new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

export { verifyToken, signToken };
