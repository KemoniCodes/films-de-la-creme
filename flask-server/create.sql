CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE lists
(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    item JSON NOT NULL,
    date DATE
);



