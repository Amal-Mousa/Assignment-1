BEGIN;

DROP TABLE IF EXISTS users, category, products CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    Role BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    image TEXT NOT NULL,
    category_id INTEGER NOT NULL REFERENCES category(id),
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    discount int NOT NULL,
    details TEXT NOT NULL
);

COMMIT;