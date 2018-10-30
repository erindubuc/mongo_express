// Schema for Profile model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.types.ObjectId,
    ref: "users",
  },
  firstName: {
    type: String,
    required: true,
  }, 
  lastName: {
    type: String,
    required: true,
  }, 
  age: Number, 
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
  aboutMe: {
    type: String,
  }
})

module.exports = Profile = mongoose.model("profiles", ProfileSchema);