const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { use } = require("../routes/auth");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // si il ya pas le nom et le email et le password retourne un message pour le utilisateur
    if (!name || !email || !password) {
      return res.json({
        msg: "Please enter passcode and email and name",
      });
    }
    const checkemail = await User.findOne({ email: email });

    if (checkemail) {
      return res.json({
        msg: "Please enter another email address",
      });
    }
    // on a utiliser bycrypt pour hachage du password bycrypte.hash dans bycrypte il ya hash qui permet de a le hachage du mot de password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const createtoken = () => {
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    };
    const token = createtoken();

    // res.json({ token: token });

    res.redirect("/auth/login");
  } catch (error) {
    res.json({ msg: error.message });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.json({ msg: "merci dentre le nom et mot de passe" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ msg: "email existe pas" });
    }
    const verifpasword = await bcrypt.compare(password, user.password);
    if (!verifpasword) {
      return res.json({ msg: "mot de passe incorecte" });
    }
    const createtoken = () => {
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    };
    const token = createtoken();

    // res.json({ token: token });
    res.redirect("/"); //  cette ligne pour renvoyer le token dans la réponse
  } catch (error) {
    return res.json(error);
  }
};

const logout = (req, res, next) => {
  res.redirect("/login");
};

module.exports = {
  register,
  login,
  logout,
};
