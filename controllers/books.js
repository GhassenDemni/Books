const Book = require("../models/Book");

const getHomePage = async (req, res) => {
  const books = await Book.find().limit(3);
  res.render("index", { books }); // Rende
};

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.render("books", { books });
};

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.render("details", { book });
};

module.exports = {
  getBooks,
  getHomePage,
  getBookById,
};
