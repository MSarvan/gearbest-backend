const PrinterData = require("../models/printer-mod.js");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const printers = await PrinterData.create(req.body);
    return res.status(200).send(printers);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const printers = await PrinterData.find().lean().exec();
    return res.status(200).send(printers);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const printers = await PrinterData.findById(req.params.id);

    return res.status(200).send(printers);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const printers = await PrinterData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(printers);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const printers = await PrinterData.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(printers);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;