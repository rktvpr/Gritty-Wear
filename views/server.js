// import the required external libraries
const express = require("express")
const { json } = require("body-parser")
const addToCart = require("./store")
const getCartItems = require("./store")

// initialize the express application
const app = express()
app.use(json())
// this serves all files in the `public` directory
// and can be used to serve our HTML website
app.use(express.static("public"))
// this renders all "ejs" pages within the `views` directory
app.set("view engine", "ejs")

const port = 3000

// our application can have multiple users, but for now, let's assume there's a single user
// who has this user name
const userName = "sample user"

// const path = require('path');
// const express = require('express');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
// const app = express();
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
