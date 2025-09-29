require('dotenv').config()
const express = require('express')

const app = express()


const connectDB = require('./config/db')
const notesRoutes = require('./routes/notesRoutes')
const rateLimiter = require('./middleware/rateLimiter')

//Simple custom middleware 

//  app.use((req,res,next) => {
//      console.log(`Req method is ${req.method} & Req URL ${req.url}`)
//      next()
//  })

app.use(express.json())//This middleware will parse the json bodies req.body
app.use(rateLimiter)

app.use("/api/notes",notesRoutes)

const PORT = process.env.PORT || 5001
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,() => console.log('app listtening on port 5001'))
    }catch(error){
        console.log('An error occured in loadin database')
    }
}

start()