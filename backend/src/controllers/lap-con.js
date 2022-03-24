const LaptopData = require("../models/lap-mod.js");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const laptops = await LaptopData.create(req.body);
    return res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const laptops = await LaptopData.find().lean().exec();
    return res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const laptops = await LaptopData.findById(req.params.id);

    return res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const laptops = await LaptopData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const laptops = await LaptopData.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;