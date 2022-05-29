const express = require("express")
const connectDb = require("./src/config/db")
const booksController = require("./src/controllers/books.controller")
const trackingController = require("./src/controllers/tracking.controller")

const app = express()
app.use(express.json())
app.use("/books", booksController)
app.use("/track", trackingController)

app.listen(3001, async()=>{
    try{
        await connectDb()
        console.log("running on port 3001")
    }
    catch(e){
        console.log(e.message)
    }
   
})