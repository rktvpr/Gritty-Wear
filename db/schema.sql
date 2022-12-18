DROP DATABASE IF EXISTS gritty_wear_db;
CREATE DATABASE gritty_wear_db;

USE gritty_wear_db

CREATE TABLE product (
    id INT auto_increment NOT NULL,
    xsSize INT NOT NULL,
    sSize INT NOT NULL,
    mSize INT NOT NULL,
    lSize INT NOT NULL,
    xlSize INT NOT NULL,
    pName VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer (
    id INT auto_increment NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    pWord VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE order_item (
    id VARCHAR(36) NOT NULL,
    total DECIMAL NOT NULL,
    quantity INT NOT NULL,
    productID INT NOT NULL,
    size VARCHAR(2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (productID) REFERENCES product(id)
);

CREATE TABLE customer_order (
    id INT auto_increment NOT NULL,
    customerID INT NOT NULL,
    purchaseDate DATETIME NOT NULL,
    oStatus VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customerID) REFERENCES customer(id)
);