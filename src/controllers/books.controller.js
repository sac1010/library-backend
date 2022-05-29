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
    if(req.query.category){
        filter.category = { $regex: new RegExp(`^${req.query.category}$`), $options: 'i' } 
    }
    if(req.query.author){
        filter.author = { $regex: new RegExp(`^${req.query.author}$`), $options: 'i' } 
    }
    if(req.query.title){
        filter.title = { $regex: new RegExp(`^${req.query.title}$`), $options: 'i' } 
    }
    try{
        const books = await Books.find(filter)
        res.status(200).send(books)
    }
    catch(err){
        res.send(err.message)
    }
    
})

module.exports = router