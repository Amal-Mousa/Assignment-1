import bcrypt, { compare } from 'bcrypt';
import {
  signupQuery,
  emailExistsQuery,
  getUserByEmailQuery
} from '../../database/index.js';
import {
  CustomError,
  signToken,
  signupSchema,
  loginSchema
} from '../../helpers/index.js';

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

const loginController = (req, res, next) => {
  const {
    body: { password, email }
  } = req;

  loginSchema
    .validateAsync({ password, email })
    .then(({ email }) => getUserByEmailQuery(email))
    .then(({ rows }) => {
      if (rows.length <= 0) throw new CustomError(406, 'Wrong email');
      const [user] = rows;
      req.user = user;
      return compare(password, rows[0].password);
    })
    .then((isMatch) => {
      if (!isMatch)
        throw new CustomError(406, 'Please enter a correct password');
      return signToken({ email, id: req.user.id, username: req.user.username });
    })
    .then((token) =>
      res
        .status(200)
        .cookie('token', token)
        .json({
          message: 'Logged In Successfully',
          data: [req.user]
        })
    )
    .catch((err) => {
      if ('isJoi' in err) {
        next(new CustomError(406, err.details[0].message));
      } else {
        next(err);
      }
    });
};

const logoutController = (req, res) => {
  res.clearCookie('token').json({
    message: 'Logged Out Successfully'
  });
};

export { signupController, loginController, logoutController };
