const router = require('express').Router();
const Dish = require('../models/Dish');

app.get("/products", (req, res) => {
  res.send("Product page");
})

const { addToCart, getCartItems } = require("./store")

app.post("/cart", (req, res) => {
	// get the item id from the request and add it to the cart
	addToCart(userName, req.body.itemId)
	res.end()
})

app.post("/checkout", (req, res) => {
	// get items from the user’s cart
	const items = getCartItems(userName)

	// create a list of requests to retrieve product information for each item.
	const requests = Object.keys(items).map((key) =>
		butter.page.retrieve("product", key)
	)

	// initialize total to 0
	let total = 0

	// execute all requests simultaneously using Promise.all
	Promise.all(requests)
		.then((responses) => {
			// once all the info is retrieved, add to the total
			// using the product price and quantity
			const renderItems = responses.map((res) => {
				const { price, title } = res.data.data.fields
				const quantity = items[res.data.data.name]
				total += price * quantity

				// the quantity and title are returned and stored in the
				// renderItems variable
				return {
					quantity,
					title,
				}
			})

			// we render the "payment-confirmation" ejs template, by providing
			// the total and the items as template variables
			res.render("payment-confirmation", {
				total,
				items: renderItems,
			})
		})
		// return an internal server error if the API returns an error
		.catch((err) => {
			console.log(err)
			res.status(500).end()
		})
})

// // route to get all dishes
// router.get('/', async (req, res) => {
//     // We find all dishes in the db and set the data equal to dishData
//     const dishData = await Dish.findAll().catch((err) => { 
//       res.json(err);
//     });
//     // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
//     const dishes = dishData.map((dish) => dish.get({ plain: true }));
//     // We render the template, 'all', passing in dishes, a new array of serialized objects.
//     res.render('all', { dishes });
//     });

// // route to get one dish
// router.get('/dish/:id', async (req, res) => {
//   try{ 
//       const dishData = await Dish.findByPk(req.params.id);
//       if(!dishData) {
//           res.status(404).json({message: 'No dish with this id!'});
//           return;
//       }
//       const dish = dishData.get({ plain: true });
//       res.render('dish', dish);
//     } catch (err) {
//         res.status(500).json(err);
//     };     
// });

// module.exports = router;
