const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "fullname is required field"],
      minLength: [3, "fullname minimum 8 character"],
    },
    email: {
      type: String,
      required: [true, "email is required field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required field"],
      minLength: [8, "password minimum 8 character"],
    },
    gender: {
      type: String,
      enum: ["pria", "wanita"],
      required: [true, "gender is required field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
