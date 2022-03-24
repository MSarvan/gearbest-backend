// Mobile Model
const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
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

const mobiledata = new mongoose.model("Mobiles", mobileSchema);

module.exports = mobiledata;
