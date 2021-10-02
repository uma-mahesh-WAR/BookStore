const author = require("../models/author");
const books = require("../models/books");

const get = (req, res, next) => {
	let a = req.query;
	if (a.admin == "true") {
		// console.log(req.cookies.clientToken);
		author.find().then((authors) => {
			res.json(authors);
		});
	} else {
		authors = [];
		books.find().then((books) => {
			books.map((book) => {
				if (authors.includes(book.author) == false) {
					authors.push(book.author);
				}
			});
			res.json(authors);
		});
	}
};

const post = (req, res, next) => {
	// console.log(req.cookies.clientToken);
	// userId = auth(req.cookies.clientToken);
	// parseInt(userId);
	let a = new author({
		author: req.body.author,
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
