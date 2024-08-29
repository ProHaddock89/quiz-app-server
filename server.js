require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



// init express app
const app = express()


// middleware
app.use(
    cors(),
    bodyParser.urlencoded({extended : false}),
    bodyParser.json()
)


// routes 
app.use("/quiz", require("./routes/quiz"))


// start server 
app.listen(process.env.PORT,  () => { console.log("server started")})