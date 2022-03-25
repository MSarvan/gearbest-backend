const MobileData = require("../models/mob-mod.js");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const mobiles = await MobileData.create(req.body);
    return res.status(200).send(mobiles);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const mobiles = await MobileData.find().lean().exec();
    return res.status(200).send(mobiles);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mobiles = await MobileData.findById(req.params.id);

    return res.status(200).send(mobiles);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const mobiles = await MobileData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(mobiles);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const mobiles = await MobileData.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(mobiles);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;