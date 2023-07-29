import { connection } from '../../config';

const signupQuery = ({ username, email, password }) => {
  const query = {
    text: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;',
    values: [username, email, password]
  };
  return connection.query(query);
};

const getUserByEmailQuery = ({ email }) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email]
  };
  return connection.query(query);
};

const emailExistsQuery = (email) => {
  const query = {
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)',
    values: [email],
  };
  return connection.query(query);
};

export { signupQuery, getUserByEmailQuery, emailExistsQuery };
