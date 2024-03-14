const express = require("express");
const dotenv = require("dotenv").config();
const cors = require ('cors')
const connectDB = require("./config/connection")
const bodyParser = require('body-parser');

const app =express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user",require("./routes/userRouter"))


const port = process.env.PORT||6000;

app.listen(port,()=>{
    connectDB();
console.log(`Server is running on http://localhost:${port}`);

})