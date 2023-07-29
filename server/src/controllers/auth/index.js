import bcrypt, { compare } from 'bcrypt';
import { signupQuery, emailExistsQuery } from '../../database';
import {
  CustomError,
  signToken,
  signupSchema,
  loginSchema
} from '../../helpers';

const signupController = (req, res, next) => {
  const {
    body: { username, email, password }
  } = req;

  signupSchema
    .validateAsync({ username, email, password }, { abortEarly: true })
    .then(() => emailExistsQuery(email))
    .then((exists) => {
      if (exists.rows[0].exists !== false) {
        throw new CustomError(406, 'Email already exists ');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => signupQuery({ username, email, password: hash }))
    .then((data) => data.rows[0])
    .then((row) => signToken(row))
    .then((token) =>
      res
        .status(201)
        .cookie('token', token)
        .json({
          message: 'Created successfully',
          data: [{ username, email }]
        })
    )
    .catch((error) => {
      if ('isJoi' in error) {
        next(new CustomError(406, error.details[0].message));
      } else {
        next(error);
      }
    });
};

export default signupController;
