const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    

}).then(()=> console.log("DB Connection Successful!"))
.catch((err) =>{
    console.error(err);
});

//to accept json inputs
app.use(express.json());

//endpoint for authentication route
app.use("/api/auth", authRoute);

app.listen(8800,() =>{
    console.log("Backend Server is running")
})