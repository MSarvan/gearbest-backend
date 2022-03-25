const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const MobileController = require("./controllers/mob-con.js");
const LaptopController = require("./controllers/lap-con.js");
const HeadphoneController = require("./controllers/headphone-con.js");
const DroneController = require("./controllers/drone-con.js");
const PrinterController = require("./controllers/printer-con.js");
const UserController = require("./controllers/user-con.js");
const { register, login, check } = require("./controllers/auth-con.js");

app.use("/Mobiles", MobileController);
app.use("/Laptop", LaptopController);
app.use("/Headphone", HeadphoneController);
app.use("/Drone", DroneController);
app.use("/Printer", PrinterController);
app.use("/User", UserController);
app.post("/register", register);
app.post("/login", login);
app.get("/register", check);

module.exports = app;
