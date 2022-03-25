// Printer Model
const mongoose = require("mongoose");

const printerSchema = new mongoose.Schema(
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

const printerdata = new mongoose.model("Printer", printerSchema);

module.exports = printerdata;