const { mongoose } = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb+srv://Saravana:0258Saro@cluster0.cl4pj.mongodb.net/test");
};

//mongodb://127.0.0.1:27017/