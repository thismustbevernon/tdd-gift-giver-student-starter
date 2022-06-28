const express = require("express");
const morgan = require("morgan");
const namesRouter = require("./routes/gift-exchange")
const app = express();


app.use("/gift-exchange", namesRouter)

app.use(morgan("tiny"))

app.get("/",async(reg,res,next)=>{
    res.status(200).json({ping:"pong"})
})



module.exports = app;