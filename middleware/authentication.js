const User = require("../models/User");
const jwt = require("jsonwebtoken");

// .evn
// validation
// crypt / bcrypt
// JWT
// Authorization
// Session

// // HASHING PASSWORD
// UserSchema.pre('save', async function () {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   });

//   // CREATE JSON WEB TOKEN
//   UserSchema.methods.createJWT = function () {
//     return jwt.sign(
//       { userId: this._id, username: this.username },
//       process.env.JWT_SECRET,
//       { expiresIn: process.env.JWT_LIFETIME }
//     );
//   };

//   // COMPARE PASSWORD
//   UserSchema.methods.comparePassword = async function (password) {
//     const isMatch = await bcrypt.compare(password, this.password);
//     return isMatch;
//   };

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Authorization invalid" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = auth;


