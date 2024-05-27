--CREATE DATABASE vitalcheck

USE vitalcheck;

CREATE TABLE nivelesSolo (
    id INT PRIMARY KEY IDENTITY(1,1),
    oxígeno DECIMAL(5,2),
    pulsoCar INT,
    fecha DATE,
    hora TIME
);

INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (98.5, 75, '2023-05-20', '08:00:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (97.3, 78, '2023-05-21', '09:30:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (96.7, 80, '2023-05-22', '11:45:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (95.4, 82, '2023-05-23', '13:20:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (99.1, 70, '2023-05-24', '15:00:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (98.8, 76, '2023-05-25', '17:35:00');
INSERT INTO nivelesSolo (oxígeno, pulsoCar, fecha, hora) VALUES (97.5, 74, '2023-05-26', '19:50:00');


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