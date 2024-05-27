--CREATE DATABASE vitalcheck

USE vitalcheck;

CREATE TABLE contactosSolo (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    rol TEXT
);

CREATE TABLE products (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    quantity INT,
    description TEXT
);

INSERT INTO products (name, description, quantity, price) VALUES ('mouse', 'mouse gaming', 10, 100) 