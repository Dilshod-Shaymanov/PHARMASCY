DROP DATABASE dorixona;

CREATE DATABASE dorixona;

USE dorixona;

-- ----------------------------------------------

-- District
DROP TABLE District;
CREATE TABLE District(
    id INT,
    name VARCHAR(255)
)

INSERT INTO District (id, name) VALUES
(1, 'Chilonzor'), 
(2, 'Yunusobod'), 
(3, 'Samarqand shahar'), 
(4, 'Buxoro shahar'), 
(5, 'Namangan shahar');

-- ------------------------------------------------

-- Dorixona
DROP TABLE dorixona;
CREATE TABLE dorixona (
    id INT,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO dorixona (id, name, address, location, phone, email) VALUES
(1, 'Dorixona 1', 'Chilonzor, ko''cha 10', '41.2995, 69.2401', '+998901234567', 'dorixona1@mail.com'),
(2, 'Dorixona 2', 'Yunusobod, ko''cha 15', '41.3389, 69.2958', '+998901234568', 'dorixona2@mail.com'),
(3, 'Dorixona 3', 'Samarqand, ko''cha 5', '39.6544, 66.9750', '+998901234569', 'dorixona3@mail.com'),
(4, 'Dorixona 4', 'Buxoro, ko''cha 7', '39.7747, 64.4286', '+998901234570', 'dorixona4@mail.com'),
(5, 'Dorixona 5', 'Namangan, ko''cha 12', '40.9983, 71.6726', '+998901234571', 'dorixona5@mail.com');

-- ----------------------------------------------

-- Medicines
DROP TABLE Medicines;
CREATE TABLE Medicines (
    id INT,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    price FLOAT,
    expiry_date DATE,
    info TEXT
);

INSERT INTO Medicines (id, name, manufacturer, price, expiry_date, info) VALUES
(1, 'Paracetamol', 'UzPharm', 5000, '2025-08-01', 'Olovni tushiradi'),
(2, 'Ibuprofen', 'Davo', 8000, '2024-12-01', 'Og''riq qoldiradi'),
(3, 'Ambroxol', 'UzPharm', 12000, '2023-11-01', 'Yo''talga qarshi'),
(4, 'Ceftriaxone', 'MedAlliance', 15000, '2026-03-01', 'Antibiotik'),
(5, 'Panthenol', 'MedAlliance', 10000, '2025-07-01', 'Yaraga qarshi krem');

-- ----------------------------------------------

-- MedicineType
DROP TABLE MedicineType;
CREATE TABLE MedicineType(
    id INT,
    name VARCHAR(255)
)

INSERT INTO MedicineType (id, name) VALUES (1, 'Tabletka'), (2, 'Sirop'), (3, 'Inyeksiya'), (4, 'Krem'), (5, 'Aerosol');

-- ----------------------------------------------
-- ----------------------------------------------

SELECT * FROM District;

SELECT * FROM dorixona;

SELECT * FROM MedicineType;

SELECT * FROM Medicines;


SELECT * 
FROM dorixona
WHERE address LIKE '%Samarqand%';
