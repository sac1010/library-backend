const express = require("express")
const router = express.Router()
const Tracking = require("../models/tracking.model")
const Books = require("../models/books.model")

router.post("/buy", async(req, res)=>{
    try{
        const book = await Books.findById(req.body.bookId).lean().exec()
        if(book.status=="unavailable"){
            res.status(400).send({message:"book is unavailable"})
        }
        else{
            const order = await Tracking.create(req.body)
            book.status = "unavailable"
            const updatedBook = await Books.findByIdAndUpdate(req.body.bookId, book)
            res.status(201).send(order)
        }             
    }
    catch(err){
        res.status(500).send(err.message)
    } 

})

router.post("/return", async(req, res)=>{
        try{
            const book = await Books.findById(req.body.bookId).lean().exec()  
            const order = await Tracking.create(req.body)
            book.status = "available"
            const updatedBook = await Books.findByIdAndUpdate(req.body.bookId, book)
            res.status(201).send(order)
        }
        catch(err){
            res.status(500).send(err.message)
        }       

       
})

router.get("/:bookId", async(req, res)=>{
    try{
        const actions = await Tracking.find({bookId:req.params.bookId}).sort({date:-1}).lean().exec()
        res.status(200).send(actions)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router 