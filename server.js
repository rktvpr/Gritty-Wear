const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
// Stripe test secret API key.
const stripe = require('stripe')('sk_test_51MG6uQDLDUN8zeUqW7DTgO0KCA4oZZfgYrT6TejIgz4j5YPgCpzge9RKFUFP4Li9DxJXQ5atM10L0zAec4SGi0Qn00idlFWD64');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/store-routes'));

app.use(express.static('public'));

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: 'customer@example.com',
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1MG6wZDLDUN8zeUqcwmGk7uX',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${PORT}/success.html`,
    cancel_url: `${PORT}/cancel.html`,
  });

  res.redirect(303, session.url);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});