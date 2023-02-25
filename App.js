const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./user/userRouter');
const AppError = require('./errorHandling/appError');

app.use(cors());
app.use(express.json());

app.use('/login', userRouter);
app.use('/signup', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

module.exports = app;