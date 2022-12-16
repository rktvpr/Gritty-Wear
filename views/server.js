const express = require("express")
const app = express()
const path = require('path');
const exphbs = require('express-handlebars');
const { json } = require("body-parser")
const port = 3000

const { addToCart, getCartItems } = require("./store")

app.use(json())
app.use(express.static("public"))

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


// const hbs = exphbs.create({});
// const PORT = process.env.PORT || 3001;
// const sequelize = require('./config/connection');

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/dish-routes'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
