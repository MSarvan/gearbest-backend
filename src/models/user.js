// User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true }, //unique: true
    password: { type: String, required: true },
    // confirm_password: { type: String, required: true },
    cart: [{ type: Object, required: false }]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = new mongoose.model("User", userSchema);

module.exports = Users;
