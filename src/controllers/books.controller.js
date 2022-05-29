const express = require("express")
const router = express.Router()
const Books = require("../models/books.model")

router.post("/", async(req, res)=>{
    try{
        const book = await Books.create(req.body)
        res.status(201).send(book)
    }
    catch(err){
        res.send(err.message)
    }
    
})

router.get("/", async(req, res)=>{
    const filter = {}
    if(req.params.category){
        filter.category = req.params.category
    }
    if(req.params.author){
        filter.author = req.params.author
    }
    if(req.params.title){
        filter.category = req.params.title
    }
    try{
        const books = await Books.find(filter).lean().exec()
        res.status(200).send(books)
    }
    catch(err){
        res.send(err.message)
    }
    
})

module.exports = router