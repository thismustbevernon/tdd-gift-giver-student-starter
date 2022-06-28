const express = require("express");
const router = express.Router();
const GiftExchange = require("./models/gift-exchange")

router.post("/pairs", async (reg, res, next) => {
 console.log(GiftExchange.pairs(['tom','tt','a','e']))
  res.status(200).json({ names: [] });
  
});

router.post("/traditional", async (reg, res, next) => {
  res.status(200).json({ names: [] });
});

module.exports = router;
