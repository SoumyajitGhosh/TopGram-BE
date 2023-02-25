const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  name: {
    type: String,
    required: true,
    validate: [validator.isEmpty, 'Please enter the full name'],
  },
  password: {
    type: String,
    required: true,
    // validate: []
  },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;