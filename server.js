const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create()

// Stripe test secret API key.
// const stripe = require('stripe')('sk_test_51MG6uQDLDUN8zeUqW7DTgO0KCA4oZZfgYrT6TejIgz4j5YPgCpzge9RKFUFP4Li9DxJXQ5atM10L0zAec4SGi0Qn00idlFWD64');

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     customer_email: 'customer@example.com',
//     submit_type: 'donate',
//     billing_address_collection: 'auto',
//     shipping_address_collection: {
//       allowed_countries: ['US', 'CA'],
//     },

//      line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: 'price_1MG6wZDLDUN8zeUqcwmGk7uX',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${PORT}/success.html`,
//     cancel_url: `${PORT}/cancel.html`,
//   });

//   res.redirect(303, session.url);
// });
// handlebars middleware setup
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(controllers);

// handlebars routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/products', (req, res) => {
  res.render('products');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,

  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(controllers);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});