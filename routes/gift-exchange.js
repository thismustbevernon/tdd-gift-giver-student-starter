const express = require("express");
const { BadRequestError, NotFoundError } = require("../utils/errors");

const giftExchange = express.Router();

const GiftExchange = require("../models/gift-exchange");


giftExchange.post("/traditional", async (req, res, next) => {
  var body = req.body;

  if (!body.names || body.names < 2 || body.names % 2 == 1) {
    return next(new BadRequestError());
  }

  var names = body.names;

  var value = GiftExchange.traditional(names);

  res.status(200).json(value);

  
});

giftExchange.post("/pairs", async (req, res, next) => {
  var body = req.body;

  if (!body.names || body.names.length % 2 == 1) {
    return next(new BadRequestError());
  }

  try {
    var names = body.names;

    var value = GiftExchange.pairs(names);
  } catch (error) {
    next(new NotFoundError());
  }

  res.status(200).json(value);
});

module.exports = giftExchange;

