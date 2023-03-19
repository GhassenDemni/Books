const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
    // minlength: [3, "Enter at least 3 chars"],
  },
  description: {
    type: String,
  },
  price: Number,
  author: String,
  image: String,
});

module.exports = mongoose.model("Books", BookSchema);
