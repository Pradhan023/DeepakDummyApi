require("dotenv").config()
const express = require("express")

const app = express()
const cors = require('cors')
const route = require("./Page/Routes")


// middleware

app.use(cors())

app.use("/V1",route)

const Port = process.env.Port || 8000

app.listen(Port,()=>{
    try{
        console.log("Server is listen on " ,  Port);
    }
    catch(err){
        console.log("Server error " , err);
    }
})