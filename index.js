const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")

//Initialize DOTENV
dotenv.config()
app.use(express.json())

//Database | Mongoose : connection
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

//
app.use("/api/auth", authRoute)

//LISTENING TO PORT
app.listen("5000", () => {
    console.log("Server is running")
})