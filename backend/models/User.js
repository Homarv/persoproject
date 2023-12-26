const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // package for don't bug uniq email inscription

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type:String, required: true}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', )