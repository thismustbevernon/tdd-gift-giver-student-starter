const express = require("express");
const morgan = require("morgan");
const { restart } = require("nodemon");
const app = express();
app.use(morgan("tiny"));
app.use(express.json());

const exchange = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");

app.use("/gift-exchange", exchange);
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
