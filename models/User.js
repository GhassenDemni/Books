const mongoose = require("mongoose");

const usershema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: [3, "Enter at least 3 chars"],
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true , }
);
module.exports = mongoose.model("User", usershema);
