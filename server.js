const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create()
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
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
// });