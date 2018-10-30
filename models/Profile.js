// Schema for Profile model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  }, 
  lastName: {
    type: String,
    required: true,
  }, 
  age: {
    type: Number,
  }, 
  email: {
    type: String,
    required: true,
  }, 
  aboutMe: {
    type: String,
  }
})

module.exports = Profile = mongoose.model("profiles", ProfileSchema);