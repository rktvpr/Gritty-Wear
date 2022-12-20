USE gritty_wear_db;

INSERT INTO product (xs_size, s_size, m_size, l_size, xl_size, p_name, price)
VALUES (50, 100, 100, 100, 50, "Gritty T-Shirt", 28.00),
       (50, 100, 100, 100, 50, "Gritty Toddler T-Shirt", 24.00),
       (50, 100, 100, 100, 50, "Gritty Baby Onesie", 20.00);

INSERT INTO customer (first_name, last_name, email, p_word)
VALUES ("Rick", "Welte", "rickExample@fakeWebsite.com", "fakepass1"),
       ("Susan", "Lee", "susanExample@fakeWebsite.com", "fakepass2"),
       ("Rahsan", "Lewis", "rahsanExample@fakeWebsite.com", "fakepass3"),
       ("Anne", "Panagotopulos", "anneExample@fakeWebsite.com", "fakepass3");

INSERT INTO order_item (total, quantity, product_id, size)
VALUES (72.00, 3, 1, "S"),
       (66.00, 2, 2, "M"),
       (85.00, 4, 3, "L"),
       (70.00, 4, 4, "XL");

INSERT INTO customer_order (customer_id, order_id, purchase_date, o_status)
VALUES (1, 1, "2022-01-17", "pending"),
       (2, 2, "2022-04-10", "delivered"),
       (3, 3, "2022-12-12", "canceled"),
       (4, 4, "2022-10-22", "shipped");