const DroneData = require("../models/drones-mod.js");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const drones = await DroneData.create(req.body);
    return res.status(200).send(drones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const drones = await DroneData.find().lean().exec();
    return res.status(200).send(drones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const drones = await DroneData.findById(req.params.id);

    return res.status(200).send(drones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const drones = await DroneData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(drones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const drones = await DroneData.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(drones);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;