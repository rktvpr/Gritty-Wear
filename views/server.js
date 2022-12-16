const express = require("express")
const app = express()
const { json } = require("body-parser")
const port = 3000

const { addToCart, getCartItems } = require("./store")

app.use(json())
// this serves all files in the `public` directory
// and can be used to serve our HTML website
app.use(express.static("public"))
// this renders all "ejs" pages within the `views` directory
app.set("view engine", "ejs")

// start an express server on the given port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

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
