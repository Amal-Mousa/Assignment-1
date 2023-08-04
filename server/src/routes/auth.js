import express from 'express';
import {
  signupController,
  loginController,
  logoutController
} from '../controllers/index.js';

const authRouter = express.Router();

authRouter.post('/signup', signupController);
authRouter.post('/signin', loginController);
authRouter.get('/logout', logoutController);

export default authRouter;
