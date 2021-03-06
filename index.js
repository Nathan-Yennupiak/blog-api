const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

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
app.use("/api/users", userRoute)

//LISTENING TO PORT
app.listen("5000", () => {
    console.log("Server is running")
})