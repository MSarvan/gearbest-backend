// Laptop Model
const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const lapdata = new mongoose.model("Laptop", laptopSchema);

module.exports = lapdata;