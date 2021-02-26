const express = require("express");
const data = require("../modals/data");
const router = new express.Router();

router.post("/add", async (req, res) => {
  const formData = new data(req.body);
  try {
    await data.deleteOne({});
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getDetails", async (req, res) => {
  try {
    const form = await data.find({});
    res.send(form);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/update", async (req, res) => {
  try {
    const form = await data.find({});
    const updatedform = await data.findOneAndUpdate(
      { Firstname: form[0].firstname },
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedform);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
