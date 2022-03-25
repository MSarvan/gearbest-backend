const Users = require("../models/user-mod.js");

const register = async (req, res) => {
  // console.log("user:");
  console.log("req.body:", req.body);
  try {
    // alert("hii")
    const user = await Users.findOne({ email: req.body.email });
    console.log("user:", user);

    if (user) {
      return res
        .status(400)
        .json({ message: "Email is already registered", status: "failed" });
    }

    const create_user = await Users.create(req.body);
    return res.status(200).json(create_user);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const login = async (req, res) => {
  // console.log("user:");
  try {
    const user = await Users.findOne({ email: req.body.email });
    console.log("user:", user);

    if (!user) {
      return res
        .status(400)
        .send({ message: "Email is not registered", status: "failed" });
    }
    // const create_user = await Users.create(req.body);
    if(req.body.password != user.password)
    {
      return res
        .status(400)
        .send({ message: "Wrong credentials", status: "failed" }); 
    }

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const check = async (req, res) => {
  try {
    const user = await Users.find().lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { register, login, check };
