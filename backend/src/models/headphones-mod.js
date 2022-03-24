// Headphone Model
const mongoose = require("mongoose");

const headphoneSchema = new mongoose.Schema(
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

const headphonedata = new mongoose.model("Headphone", headphoneSchema);

module.exports = headphonedata;