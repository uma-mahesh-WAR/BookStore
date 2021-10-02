const books = require("../models/books");
const category = require("../models/category");

const get = (req, res, next) => {
	let a = req.query;
	if (a.admin == "true") {
		// console.log(req.cookies.clientToken);
		category.find().then((categories) => {
			res.json(categories);
		});
	} else {
		categories = [];
		books.find().then((books) => {
			books.map((book) => {
				if (categories.includes(book.category) == false) {
					categories.push(book.category);
				}
			});
			res.json(categories);
		});
	}
};

const post = (req, res, next) => {
	// console.log(req.cookies.clientToken);
	// userId = auth(req.cookies.clientToken);
	// parseInt(userId);
	let a = new category({
		category: req.body.category,
	});
	a.save()
		.then((crt) => {
			res.json({
				status: true,
				message: "Posted",
			});
		})
		.catch((err) => {
			res.json({
				status: false,
				message: err.message,
			});
		});
};

module.exports = {
	get,
	post,
};
