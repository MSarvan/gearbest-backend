const HeadphoneData = require("../models/headphones-mod.js");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const headphones = await HeadphoneData.create(req.body);
    return res.status(200).send(headphones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const headphones = await HeadphoneData.find().lean().exec();
    return res.status(200).send(headphones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const headphones = await HeadphoneData.findById(req.params.id);

    return res.status(200).send(headphones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const headphones = await HeadphoneData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(headphones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const headphones = await HeadphoneData.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(headphones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;