// Drone Model
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema(
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

const dronedata = new mongoose.model("Drone", droneSchema);

module.exports = dronedata;