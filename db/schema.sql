DROP DATABASE IF EXISTS gritty_wear_db;
CREATE DATABASE gritty_wear_db;

USE gritty_wear_db

CREATE TABLE product (
    id INT auto_increment NOT NULL,
    xs_size INT NOT NULL,
    s_size INT NOT NULL,
    m_size INT NOT NULL,
    l_size INT NOT NULL,
    xl_size INT NOT NULL,
    p_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer (
    id INT auto_increment NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    p_word VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE order_item (
    id INT auto_increment NOT NULL,
    total DECIMAL NOT NULL,
    quantity INT NOT NULL,
    product_id INT NOT NULL,
    size VARCHAR(2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE customer_order (
    id INT auto_increment NOT NULL,
    customer_id INT NOT NULL,
    purchase_date DATETIME NOT NULL,
    o_status VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);