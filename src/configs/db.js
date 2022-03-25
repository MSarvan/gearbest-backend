const { default: mongoose } = require("mongoose");

const connect = () =>
  mongoose.connect(
    //"mongodb+srv://ravibala-13:bals1999@cluster0.hfo0i.mongodb.net/Eagle-shop"
    "mongodb+srv://Saravana:0258Saro@cluster0.cl4pj.mongodb.net/test"
  )
module.exports = connect;
