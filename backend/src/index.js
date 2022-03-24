const mongoose = require("mongoose");
const express = require("express");
const connect = require("./database");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const MobileController = require("./controllers/mob-con.js");
const LaptopController = require("./controllers/lap-con.js");
const HeadphoneController = require("./controllers/headphone-con.js");
const DroneController = require("./controllers/drone-con.js");
const PrinterController = require("./controllers/printer-con.js");
const UserController = require("./controllers/user-con.js")
const { register, login, check } = require("./controllers/auth-con.js");
const port = process.env.PORT || 7890;

app.use("/Mobiles", MobileController);
app.use("/Laptop", LaptopController);
app.use("/Headphone", HeadphoneController);
app.use("/Drone", DroneController);
app.use("/Printer", PrinterController);
app.use("/User", UserController);
app.post("/register", register);
app.post("/login", login);
app.get("/register", check);

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("I'm listening on 7890");
  } catch (e) {
    console.log(e.message);
  }
});
