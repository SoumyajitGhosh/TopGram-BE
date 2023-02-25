const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const validator = require('validator');
const AppError = require('../errorHandling/appError');
const Users = require('./userModel');

dotenv.config();

exports.login = async (req, res, next) => {
  const email = req.body.emailId;
  if (validator.isEmail(email)) {
    const user = await Users.findOne({ email });
    if (!user) {
      return next(new AppError('User does not exist', 401));
    }
    else 
      return jwt.sign({ email }, process.env.JWT_SECRET);
  }
};

exports.signup = async (req, res, next) => {
  const email = req.body.emailId;
  const password = req.body.password;
  const name = req.body.name
  const user = await Users.findOne({ email });
  if (user) {
    return next(new AppError('User already exists', 401));
  }
  else {
    const response = await Users.insertOne({ email, password, name });
    console.log("Response:", response);
    return jwt.sign({ email, password }, process.env.JWT_SECRET);
  }
}