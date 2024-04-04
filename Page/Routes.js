const { ControllerLeData } = require("../Controller/Dodata");

const route = require("express").Router();

route.get("/",(req,res)=>{
    return res.json({msg:"Le Ye home hai aur bta kya krra hai "})
})

route.get("/lefir",ControllerLeData)

module.exports = route

