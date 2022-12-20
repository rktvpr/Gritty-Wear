USE gritty_wear_db

INSERT INTO product (id, xs_size, s_size, m_size, l_size, xl_size, p_name, price)
VALUES (1, 50, 100, 100, 100, 50, "Gritty T-Shirt", 28.00),
       (2, 50, 100, 100, 100, 50, "Gritty Toddler T-Shirt", 24.00),
       (3, 50, 100, 100, 100, 50, "Gritty Baby Onesie", 20.00);

INSERT INTO customer (id, first_name, last_name, email, p_word)
VALUES (1, "Rick", "Welte", "rickExample@fakeWebsite.com", "fakepass1"),
       (2, "Susan", "Lee", "susanExample@fakeWebsite.com", "fakepass2"),
       (3, "Rahsan", "Lewis", "rahsanExample@fakeWebsite.com", "fakepass3"),
       (4, "Anne", "Panagotopulos", "anneExample@fakeWebsite.com", "fakepass3");

INSERT INTO order_item (id, total, quantity, product_id, size)
VALUES (1, 72.00, 3, 1, "S"),
       (2, 66.00, 2, 2, "M"),
       (3, 85.00, 4, 3, "L"),
       (4, 70.00, 4, 4, "XL");

INSERT INTO customer_order (id, customer_id, purchase_date, o_status)
VALUES (1, 1, "2022-01-17T04:33:12.000Z", "pending"),
       (2, 2, "2022-04-10T05:15:13.000Z", "delivered"),
       (3, 3, "2022-12-12T04:10:18.000Z", "canceled"),
       (4, 4, "2022-10-22T12:55:19.000Z", "shipped"),