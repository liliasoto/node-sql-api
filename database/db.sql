--INSTRUCCIONES PARA VITALCHECK WEB

CREATE DATABASE vitalcheck

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

-- INSTRUCCIONES PARA VITALCHECK MÓVIL

CREATE DATABASE vitalcheck

USE vitalcheck;

-- Crear la tabla EstadoSalud
CREATE TABLE EstadoSalud (
    id INT PRIMARY KEY IDENTITY(1,1),
    nivel_oxigeno DECIMAL(5, 2) NOT NULL,
    pulso_cardiaco INT NOT NULL,
    fecha_hora DATETIME NOT NULL
);

-- Insertar datos en la tabla EstadoSalud
INSERT INTO EstadoSalud (nivel_oxigeno, pulso_cardiaco, fecha_hora) VALUES 
(98.89, 72, '2023-01-01 10:00:00'),
(96.45, 75, '2023-02-01 10:00:00'),
(95.78, 70, '2023-03-01 10:00:00'),
(97.32, 73, '2023-04-01 10:00:00'),
(99.10, 74, '2023-05-01 10:00:00'),
(96.55, 72, '2023-06-01 10:00:00'),
(97.25, 71, '2023-07-01 10:00:00'),
(98.60, 75, '2023-08-01 10:00:00'),
(96.40, 72, '2023-09-01 10:00:00'),
(97.85, 74, '2023-10-01 10:00:00'),
(98.99, 73, '2023-11-01 10:00:00'),
(99.45, 71, '2023-12-01 10:00:00');

