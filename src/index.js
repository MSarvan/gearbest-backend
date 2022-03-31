const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const mobileController = require("./controllers/mob.js");
const LaptopController = require("./controllers/lap.js");
const HeadphoneController = require("./controllers/headphone.js");
const DroneController = require("./controllers/drone.js");
const PrinterController = require("./controllers/printer.js");
const UserController = require("./controllers/user.js");
const { register, login, check } = require("./controllers/auth.js");

// app.use('/', function (req, res) {
//     return res.redirect('https://faballey-clone.vercel.app/');
// });

app.use("/mobiles", mobileController);
app.use("/laptop", LaptopController);
app.use("/headphone", HeadphoneController);
app.use("/Drone", DroneController);
app.use("/Printer", PrinterController);
app.use("/User", UserController);
app.post("/register", register);
app.post("/login", login);
app.get("/register", check);

module.exports = app;
