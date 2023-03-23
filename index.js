const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const bodyparser = require("body-parser")
const app = express()
const url = process.env.MONGODB_URI
const teacherRoute = require('./src/Routs/teachers')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongoose.connect(url).then(() => {
    console.log("CONNECTED TO DATABASE..");
}).catch((err) => {
    console.log(err);
})
app.use('/teacher', teacherRoute)
app.listen(process.env.PORT, () => {
    console.log(`server running on port : ${process.env.PORT}`);
})