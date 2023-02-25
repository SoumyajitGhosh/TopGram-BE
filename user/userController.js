const userLogin = require('./userService');
const catchAsync = require('./../errorHandling/catchAsync');
const AppError = require('./../errorHandling/appError');

exports.login = catchAsync(async (req, res, next) => {
  const token = await userLogin.login(req, res, next);
  if (!token) {
    next(new AppError('Invalid emailId', 1000));
    // console.log("Error found")
  } else {
    res.status(200).json({
      token,
    });
  }
});

exports.signup = catchAsync(async (req, res, next) => {
  const token = await userLogin.signup(req, res, next);
  if (!token) {
    next(new AppError('Invalid emailId', 1000));
    // console.log("Error found")
  } else {
    res.status(200).json({
      token,
    });
  }
});