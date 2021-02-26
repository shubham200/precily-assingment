const express = require("express");
const clickCount = require("../modals/count");
const router = new express.Router();

router.post("/addClick", async (req, res) => {
  const clickno = new clickCount(req.body);
  try {
    await clickCount.deleteOne({});
    await clickno.save();
    res.status(201).send(clickno);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/readCounts", async (req, res) => {
  try {
    const clicks = await clickCount.find({});
    res.send(clicks);
  } catch (error) {
    res.status(500).send("Error in load clicks");
  }
});

router.patch("/updateCount", async (req, res) => {
  try {
    const clicks = await clickCount.find({});
    const updatedCount = await clickCount.findOneAndUpdate(
      { _id: clicks[0]._id },
      req.body,
      {
        new: true,
      }
    );
    
    res.send(updatedCount);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;