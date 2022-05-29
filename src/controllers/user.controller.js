const express = require("express")
const router = express.Router()
const User = require("../models/user.model")

router.post("", async(req, res)=>{
    try{
        const user = await User.create(req.body)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }

})


router.get("", async(req, res)=>{
    try{
        const user = await User.find().lean().exec()
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }

})
module.exports = router